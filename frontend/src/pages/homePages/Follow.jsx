import React from "react";
import Modal from "react-modal-image";

const Follow = () => {
  const pics = [
    {
      img: "/img/follow/f1.png",
    },
    {
      img: "/img/follow/f2.png",
    },
    {
      img: "/img/follow/f3.png",
    },
    {
      img: "/img/follow/f4.png",
    },
    {
      img: "/img/follow/f5.png",
    },
  ];

  return (
    <section className="default-padding tw-px-4 sm:tw-px-6 md:tw-px-8 lg:tw-px-[75px]">
      <p className="tw-font-bold tw-text-[18px] sm:tw-text-[20px] lg:tw-text-[22px] tw-leading-[25px] tracking-[0.02em] tw-mb-6 sm:tw-mb-8 lg:tw-mb-10">
        Follow @forest_sports_arena
      </p>
      <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-3 md:tw-grid-cols-4 lg:tw-grid-cols-5 tw-gap-2 sm:tw-gap-3 md:tw-gap-4">
        {pics.map((items, index) => (
          <div
            key={index}
            className="tw-w-full tw-aspect-square tw-cursor-pointer tw-overflow-hidden"
          >
            <Modal
              small={items.img}
              large={items.img}
              alt="forest images"
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Follow;