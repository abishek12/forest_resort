import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../utils/cn";

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div className="tw-w-full tw-h-full tw-p-10 tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-max-w-7xl tw-mx-auto tw-gap-4 tw-relative">
      {cards.map((card, i) => (
        <div key={i} className={cn(card.className, "")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "tw-relative tw-overflow-hidden",
              selected?.id === card.id
                ? "tw-rounded-lg tw-cursor-pointer tw-absolute tw-inset-0 tw-h-1/2 tw-w-full md:tw-w-1/2 tw-m-auto tw-z-50 tw-flex tw-justify-center tw-items-center tw-flex-wrap tw-flex-col"
                : lastSelected?.id === card.id
                ? "tw-z-40 tw-bg-white tw-rounded-xl tw-h-full tw-w-full"
                : "tw-bg-white tw-rounded-xl tw-h-full tw-w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage card={card} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className={cn(
            "tw-absolute tw-h-full tw-w-full tw-left-0 tw-top-0 tw-bg-black tw-opacity-0 tw-z-10",
            selected?.id ? "tw-pointer-events-auto" : "tw-pointer-events-none"
          )}
          animate={{ opacity: selected?.id ? 0.3 : 0 }}
        />
      )}
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <img
      loading="lazy"
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "tw-object-cover tw-object-top tw-absolute tw-inset-0 tw-h-full tw-w-full tw-transition tw-duration-200",
        loaded ? "tw-blur-none" : "tw-blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="tw-bg-transparent tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-end tw-rounded-lg tw-shadow-2xl tw-relative tw-z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-bg-black tw-opacity-60 tw-z-10"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="tw-relative tw-px-8 tw-pb-4 tw-z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
