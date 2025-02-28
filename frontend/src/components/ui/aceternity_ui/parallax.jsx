<<<<<<< HEAD
// import img1 from '/img/new/swimnew.webp';
// import img2 from "/img/fsa_image/swim1.webp";

// const HeroParallax = () => {
//   return (
//     <>
//       <section className="tw-w-full tw-h-[786px] tw-bg-white tw-p-[81px] tw-relative z-0">
//         <div className='tw-w-[1153px] tw-h-[280px] tw-bg-cyan-500 tw-rounded-[30px] tw-opacity-30 tw-left-[150px] tw-absolute tw-top-[100px] tw-z-10'></div>
//         <div className="tw-flex tw-gap-[85px] tw-h[410px] tw-justify-center tw-items-center tw-absolute tw-z-20 tw-top-1/2 -tw-translate-y-1/2">
//           <div className="tw-flex tw-gap-8 tw-relative tw-z-0">
//             <div className='tw-shadow-lg tw-w-[300px] tw-h-[400px] tw-rounded-[20px] tw-border-4 tw-border-white tw-overflow-hidden'>
//               <img src={img1} alt='swimming pool' className='tw-w-full tw-h-full tw-object-cover'></img>
//             </div>
//             <div className='tw-shadow-lg tw-w-[300px] tw-h-[400px] tw-rounded-[20px] tw-border-4 tw-border-white tw-overflow-hidden'>
//               <img src={img2} alt='swimming pool' className='tw-w-full tw-h-full tw-object-cover'></img>
//             </div>
//             <div className="tw-w-[280px] tw-h-[280px] tw-rounded-full tw-border-4 tw-border-indigo-600 tw-bg-white">
//         hello
//       </div>
//           </div>
//           <div>
//             <h1 className=' tw-bg-gradient-to-br tw-from-[#1A7218] tw-to-[#B5DE4C] tw-text-transparent tw-bg-clip-text tw-font-bold tw-text-[55px] leaading-[80px] tracking-[0.05em] '>
//               FOREST SPORTS ARENA
//             </h1>
//             <p className='tw-font-medium tw-text-lg leading-[40px] tracking-[0.05em] text-black'>Create unforgettable memories at our Recreation Center and Swimming Pool.
//               Enjoy the perfect blend of leisure and fun in a serene and welcoming environment.
//             </p>
//             <div>
//               <button className="tw-rounded-[5px] bg-[#41E3EB] w-[132px] h-[43px]">About Us</button>
//             </div>
//           </div>
//         </div>
//       </section>
   
//     </>
//   )
// }
// export default HeroParallax;
=======
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";
import { fadeInAnimationVariantsImg } from "../../../utils/fadeInAnimation";
import { TextGenerateEffect } from "./text-generate-effect";
import BoxReveal from "../magic_ui/box-reveal";

const text =
  "Create unforgettable memories at our Recreation Center and Swimming Pool. Enjoy the perfect blend of leisure and fun in a serene and welcoming environment.";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-800, 100]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="sm:tw-h-[200vh] tw-py-20 mb-60 tw-overflow-hidden tw-antialiased tw-relative tw-flex tw-flex-col tw-self-auto"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="tw-flex tw-flex-row-reverse tw-space-x-reverse tw-space-x-20 tw-mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="tw-flex tw-flex-row tw-mb-20 tw-space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="tw-flex tw-justify-center">
      <div className="tw-z-10 tw-w-11/12 tw-flex tw-justify-center">
        <div className=" tw-p-4 tw-flex tw-place-items-center">
          <div className="tw-h-fit">
            <BoxReveal>
              <h1 className="tw-flex tw-flex-col tw-leading-[60px] sm:tw-leading-[110px] tw-font-black tw-text-[60px] sm:tw-text-[120px] tw-font-['Roboto_Slab',serif]">
                <span className="tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-[#7dc624] tw-to-[#228c22]">
                  FOREST
                </span>
                <span className="tw-pl-10 tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-[#228c22] tw-to-[#65984b]">
                  SPORTS
                </span>
                <span className="tw-pl-28 tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-[#1e4b2d] tw-to-[#228c22]">
                  ARENA
                </span>
              </h1>
            </BoxReveal>
            <BoxReveal boxColor={"#d2f6d2"}>
              <p className="tw-max-w-2xl tw-text-base md:tw-text-xl tw-mt-8 tw-text-neutral-900">
                <TextGenerateEffect words={text} />
              </p>
            </BoxReveal>
            <Link
              className="btn btn-md btn-gradient animation"
              to="/contact-us#"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className="tw-flex tw-justify-start lg:tw-w-[900px] lg:tw-p-10">
          <motion.img
            whileHover={{ scale: 1.1 }}
            style={{ height: "100%" }}
            variants={fadeInAnimationVariantsImg}
            initial="initial"
            whileInView="animate"
            className="tw-hidden lg:tw-block tw-rounded-bl-3xl tw-rounded-tr-3xl tw-rounded-tl-md tw-rounded-br-md"
            src="img/fsa_image/swim1.webp"
            alt="Swimming Pool"
          />
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="tw-group/product tw-h-64 md:tw-h-96 tw-w-[18rem] md:tw-w-[30rem] tw-relative tw-flex-shrink-0"
    >
      <a
        href={product.a}
        className="tw-block group-hover/tw-product:tw-shadow-2xl"
      >
        <img
          loading="lazy"
          src={product.thumbnail}
          height="600"
          width="600"
          className="tw-object-cover tw-object-left-top tw-absolute tw-h-full tw-w-full tw-inset-0"
          alt={product.title}
        />
      </a>
      <div className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-opacity-0 group-hover/tw-product:tw-opacity-80 tw-bg-black tw-pointer-events-none"></div>
      <h2 className="tw-absolute tw-bottom-4 tw-left-4 tw-opacity-0 group-hover/tw-product:tw-opacity-100 tw-text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
