import React, { useRef, memo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ImagesCard from "./ImagesCard";
import FrontComponent from "./FrontComponent";
import HeroExperience from "../hero/HeroExperience";

const BackComponent = ({ products }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start -30vh", "end start"],
    });

    const springConfig = {
        stiffness: 150,  // Faster movement
        damping: 25,     // Less bounce, more control
        mass: 1
    };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 500]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -500]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [15, 0]),
        springConfig
    );
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.2, 1])

    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.5], [30, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.5], [-1250, 30]),
        springConfig
    );
    return (
        <div ref={ref}>
            <HeroExperience />
            <div className="tw-pb-20 mb-60 tw-overflow-hidden">

                <FrontComponent />
                <motion.div
                    style={{
                        opacity,
                        rotateZ,
                        translateY,
                        rotateX,
                        willChange: 'transform'
                    }}>
                    <motion.div className="tw-flex tw-flex-row-reverse tw-gap-8 tw-mb-8">
                        {products.map((product) => (
                            <ImagesCard product={product} translate={translateX} key={product.title} />
                        ))}
                    </motion.div>
                    <motion.div className="tw-flex tw-flex-row tw-gap-8">
                        {products.map((product) => (
                            <ImagesCard product={product} translate={translateXReverse} key={product.title} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default memo(BackComponent); // Prevent unnecessary re-renders
