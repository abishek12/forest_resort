import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const Highlight = ({ children, className }) => {
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
        `tw-relative tw-inline-block tw-px-1 tw-py-1 sm:tw-py-0 tw-rounded-lg tw-bg-gradient-to-r tw-text-white tw-from-[#228c22] tw-to-[#59da59]`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
