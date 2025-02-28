import React, { memo } from "react";
import { motion } from "framer-motion";

const ImagesCard = ({ product, translate }) => {
    return (
        <motion.div
            style={{ x: translate }}
            // whileHover={{ y: -10 }}
            className="tw-group/product tw-h-64 md:tw-h-96 tw-w-[467px] md:tw-w-[311px] tw-relative tw-flex-shrink-0"
        >
            <a href={product.a} className="tw-block group-hover/tw-product:tw-shadow-2xl">
                <img
                    loading="lazy"
                    src={product.thumbnail}
                    height="467px"
                    width="467px"
                    className="tw-object-cover tw-absolute tw-h-full tw-w-full"
                    alt={product.title}
                />
            </a>
            <div className="tw-absolute tw-inset-0 tw-bg-black tw-opacity-0 group-hover/tw-product:tw-opacity-80"></div>
            <h2 className="tw-absolute tw-bottom-4 tw-left-4 tw-opacity-0 group-hover/tw-product:tw-opacity-100 tw-text-white">
                {product.title}
            </h2>
        </motion.div>
    );
};

export default memo(ImagesCard); // Prevent unnecessary re-renders
