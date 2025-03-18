import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const HighlightNew = ({ children, className }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `tw-relative tw-w-[470px] tw-h-[80px] tw-inline-block tw-font-bold tw-text-[33px] leading-[49.5px] tracking-[0.05em] tw-px-6 tw-py-6 sm:tw-py-0 tw-rounded-[50px] tw-bg-gradient-to-r tw-text-white tw-from-[#228c22] tw-to-[#59da59]`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
