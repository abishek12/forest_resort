import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

export function OfferSection() {
  const features = [
    {
      title: "Swim In The Nature",
      description:
        "Immerse yourself in natural beauty with our curated selection of pristine swimming locations.",
      skeleton: <SkeletonOne />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-4 lg:tw-border-r",
    },
    {
      title: "Capture The Moment",
      description: "Preserve your memories with stunning photos in the nature.",
      skeleton: <SkeletonTwo />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-2",
    },
    {
      title: "Play Futsal with Friends",
      description:
        "Enjoy fast-paced futsal matches with friends on our state-of-the-art courts.",
      skeleton: <SkeletonThree />,
      className: "tw-col-span-1 lg:tw-col-span-3 lg:tw-border-r",
    },
    {
      title: "Dine With Friends and Family",
      description:
        "Savor delicious meals and create lasting memories in our welcoming dining spaces perfect for gatherings.",
      skeleton: <SkeletonFour />,
      className: "tw-col-span-1 lg:tw-col-span-3 lg:tw-border-none",
    },
  ];
  return (
    <div className="tw-relative tw-z-20 tw-py-10 tw-max-w-7xl tw-mx-auto lg:tw-py-20">
      <div className="tw-px-8">
        <h4 className="tw-text-3xl tw-max-w-5xl tw-mx-auto tw-text-center tw-tracking-tight tw-font-medium tw-text-black lg:tw-text-5xl lg:tw-leading-tight">
          <Highlight>Packed with features</Highlight>
        </h4>

        <p className="tw-text-sm tw-max-w-2xl tw-my-4 tw-mx-auto tw-text-neutral-500 tw-text-center tw-font-normal tw-dark:text-neutral-300 lg:tw-text-base">
          Forest Sports Arena is packed with thousands of features for athletes,
          adventurers, and nature lovers.
        </p>
      </div>
      <div className="tw-relative">
        <div className="tw-grid tw-grid-cols-1 tw-mt-12 tw-border tw-rounded-md lg:tw-grid-cols-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>
                <Highlight>{feature.title}</Highlight>
              </FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="tw-h-full tw-w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ children, className }) => {
  return (
    <div
      className={cn(
        `tw-p-4 sm:tw-p-8 tw-relative tw-overflow-hidden`,
        className
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }) => {
  return (
    <p className="tw-max-w-5xl tw-mx-auto tw-text-left tw-tracking-tight tw-text-black tw-text-xl md:tw-text-2xl md:tw-leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }) => {
  return (
    <p
      className={cn(
        "tw-text-sm md:tw-text-base tw-max-w-4xl tw-text-left tw-mx-auto",
        "tw-text-neutral-500 tw-text-center tw-font-normal",
        "tw-text-left tw-max-w-sm tw-mx-0 md:tw-text-sm tw-my-2"
      )}
    >
      {children}
    </p>
  );
};

export const SkeletonOne = () => {
  return (
    <div className="tw-relative tw-flex tw-py-8 tw-px-2 tw-gap-10 tw-h-full md:tw-h-[60%] lg:tw-h-auto">
      <div className="tw-w-full tw-p-5 tw-mx-auto tw-bg-[#8dc18a] tw-dark:tw-bg-neutral-900 tw-shadow-2xl tw-group tw-h-full">
        <div className="tw-flex tw-flex-1 tw-w-full tw-h-full tw-flex-col tw-space-y-2">
          {/* TODO */}
          <img
            loading="lazy"
            src="/img/banner/swimming_pool.jpg"
            alt="header"
            width={800}
            height={800}
            className="tw-h-full tw-w-full tw-aspect-square tw-object-cover tw-object-left-top tw-rounded-sm"
          />
        </div>
      </div>
      <div className="tw-absolute tw-bottom-0 tw-z-40 tw-inset-x-0 tw-h-60 tw-bg-gradient-to-t tw-from-[#2d8e29] tw-dark:tw-from-black tw-via-[#8dc18a] tw-dark:tw-via-black tw-to-transparent tw-w-full tw-pointer-events-none" />
      <div className="tw-absolute tw-top-0 tw-z-40 tw-inset-x-0 tw-h-60 tw-bg-gradient-to-b tw-from-[#2d8e29] tw-dark:tw-from-black tw-via-transparent tw-to-transparent tw-w-full tw-pointer-events-none" />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="tw-relative tw-flex tw-gap-10 tw-h-full tw-group/tw-image">
      <div className="tw-w-full tw-mx-auto tw-bg-transparent tw-dark:tw-bg-transparent tw-group tw-h-full">
        <div className="tw-flex tw-flex-1 tw-w-full tw-h-full tw-flex-col tw-space-y-2 tw-relative">
          {/* TODO */}
          <img
            loading="lazy"
            src="/img/fsa_image/futsal2.jpeg"
            alt="header"
            width={600}
            height={600}
            className="tw-h-[70%] tw-w-full tw-aspect-square tw-object-cover tw-object-center tw-rounded-sm tw-blur-none tw-group-hover/tw-image:tw-blur-md tw-transition-all tw-duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export const SkeletonTwo = () => {
  const images = [
    "/img/fsa_image/futsal2.jpeg",
    "/img/fsa_image/swim2.jpeg",
    "/img/fsa_image/futsal.jpeg",
    "/img/fsa_image/book.jpeg",
    "/img/fsa_image/swim4.jpg",
  ];
  const images2 = [
    "/img/fsa_image/book.jpeg",
    "/img/fsa_image/swim4.jpg",
    "/img/fsa_image/futsal2.jpeg",
    "/img/fsa_image/swim2.jpeg",
    "/img/fsa_image/futsal.jpeg",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.1,
      rotate: 0,
      zIndex: 100,
    },
  };
  return (
    <div className="tw-relative tw-flex tw-flex-col tw-items-start tw-p-8 tw-gap-10 tw-h-full md:tw-h-[90%] tw-overflow-hidden">
      {/* TODO */}
      <div className="tw-flex tw-flex-row -tw-ml-20">
        {images.map((image, idx) => (
          <motion.div
            variants={imageVariants}
            key={"images-first" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="tw-rounded-xl -tw-mr-4 tw-mt-4 tw-p-1 tw-bg-white tw-border tw-border-neutral-100 tw-flex-shrink-0 tw-overflow-hidden"
          >
            <img
              loading="lazy"
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="tw-rounded-lg tw-h-20 tw-w-20 md:tw-h-80 md:tw-w-60 tw-object-cover tw-flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="tw-flex tw-flex-row">
        {images2.map((image, idx) => (
          <motion.div
            key={"images-second" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            variants={imageVariants}
            whileHover="whileHover"
            whileTap="whileTap"
            className="tw-rounded-xl -tw-mr-4 tw-mt-4 tw-p-1 tw-bg-white tw-border tw-border-neutral-100 tw-flex-shrink-0 tw-overflow-hidden"
          >
            <img
              loading="lazy"
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="tw-rounded-lg tw-h-20 tw-w-20 md:tw-h-80 md:tw-w-60 tw-object-cover tw-flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
      <div className="tw-absolute tw-left-0 tw-z-[100] tw-inset-y-0 tw-w-20 tw-bg-gradient-to-r tw-from-[#8dc18a] tw-dark:tw-from-black tw-to-transparent tw-h-full tw-pointer-events-none" />
      <div className="tw-absolute tw-right-0 tw-z-[100] tw-inset-y-0 tw-w-20 tw-bg-gradient-to-l tw-from-[#8dc18a] tw-dark:tw-from-black tw-to-transparent tw-h-full tw-pointer-events-none" />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="tw-h-60 md:tw-h-32 tw-flex tw-flex-col tw-items-center tw-relative tw-bg-transparent tw-mt-10">
      <img
        loading="lazy"
        src="/img/fsa_image/futsal.jpeg"
        alt="Dine with friends and family"
        height={800}
        width={800}
      />
    </div>
  );
};
