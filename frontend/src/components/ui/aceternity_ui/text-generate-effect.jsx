import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../../utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className=" tw-text-black tw-opacity-0">
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="tw-mt-4">
        <div className="tw-dark:text-white tw-text-black tw-leading-tight tw-tracking-wide tw-text-justify">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
