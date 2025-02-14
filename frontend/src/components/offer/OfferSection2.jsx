import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";
import { Highlight } from "../ui/aceternity_ui/text-highlight";
export function OfferSection() {
  const features = [
    {
      title: "Swim In The Nature",
      description:
        "Enjoy a *free* first session with every membership sign-up!",
      skeleton: <SkeletonOne />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-full lg:tw-border-r",
    },
    {
      title: "Play Futsal with Friends",
      description: "Book now and get *10% off* your first game!",
      skeleton: <SkeletonTwo />,
      // className: "tw-col-span-1 lg:tw-col-span-3 lg:tw-border-r",
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-full lg:tw-border-r",
    },
    {
      title: "Dine With Friends and Family",
      description: "Free dessert* with every group booking of 4 or more!",
      skeleton: <SkeletonThree />,
      // className: "tw-col-span-1 lg:tw-col-span-3 lg:tw-border-none",
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-full lg:tw-border-r",
    },
    {
      title: "Dine With Friends and Family",
      description: "Free dessert* with every group booking of 4 or more!",
      skeleton: <SkeletonFour />,
      // className: "tw-col-span-1 lg:tw-col-span-3 lg:tw-border-none",
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-full lg:tw-border-r",
    },
    {
      title: "Dine With Friends and Family",
      description: "Free dessert* with every group booking of 4 or more!",
      skeleton: <SkeletonFive />,
      // className: "tw-col-span-1 lg:tw-col-span-3 lg:tw-border-none",
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-full lg:tw-border-r",
    },
  ];

  return (
    <div className="tw-relative tw-z-20 tw-py-10 tw-max-w-7xl tw-mx-auto lg:tw-py-20">
      <div className="tw-px-8">
        <h4 className="tw-text-3xl tw-max-w-5xl tw-mx-auto tw-text-center tw-tracking-tight tw-font-medium tw-text-black lg:tw-text-5xl lg:tw-leading-tight tw-font-['Roboto_Slab',serif]">
          {/* Packed with thousands of features */}
          <Highlight>Packed with generous offers</Highlight>
        </h4>

        <p className="tw-text-sm tw-max-w-2xl tw-my-4 tw-mx-auto tw-text-neutral-500 tw-text-center tw-font-normal tw-dark:text-neutral-300 lg:tw-text-base">
          Forest Sports Arena is packed with thousands of features for athletes,
          adventurers, and nature lovers.
        </p>
      </div>
      <div className="tw-relative">
        <div className="tw-grid tw-grid-cols-1 tw-mt-12 tw-border tw-rounded-md lg:tw-grid-cols-6" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              {/* <FeatureTitle>
                <Highlight>{feature.title}</Highlight>
              </FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription> */}
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
    <p className="tw-max-w-5xl tw-mx-auto tw-text-left md:tw-text-center tw-tracking-tight tw-text-black tw-text-xl md:tw-text-2xl md:tw-leading-snug">
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

const SkeletonOne = () => {
  return (
    <div className="tw-h-60 md:tw-h-full tw-flex tw-flex-col tw-items-center tw-relative tw-bg-transparent tw-mt-10">
      <img
        loading="lazy"
        src="/img/fsa_image/offer1.png"
        alt=""
        height={500}
        width={500}
      />
    </div>
  );
};

export const SkeletonTwo = () => {
  return (
    <div className="tw-h-60 md:tw-h-full tw-flex tw-flex-col tw-items-center tw-relative tw-bg-transparent tw-mt-10">
      <img
        loading="lazy"
        src="/img/fsa_image/offer2.png"
        // alt="Play Futsal with Friends"
        height={500}
        width={500}
      // className="sm:tw-h-[80%] tw-h-full tw-w-full"
      />
    </div>
  );
};

export const SkeletonThree = () => {
  return (
    <div className="tw-h-60 md:tw-h-full tw-flex tw-flex-col tw-items-center tw-relative tw-bg-transparent tw-mt-10">
      <img
        loading="lazy"
        src="/img/fsa_image/offer3.png"
        alt=""
        height={500}
        width={500}
      // className="tw-h-full tw-w-full sm:tw-h-[80%] sm:tw-w-full"
      />
    </div>
  );
};

export const SkeletonFour = () => {
  return (
    <div className="tw-h-60 md:tw-h-full tw-flex tw-flex-col tw-items-center tw-relative tw-bg-transparent tw-mt-10">
      <img
        loading="lazy"
        src="/img/fsa_image/offer4.png"
        alt=""
        height={500}
        width={500}
      // className="tw-h-full tw-w-full sm:tw-h-[80%] sm:tw-w-full"
      />
    </div>
  );
};

export const SkeletonFive = () => {
  return (
    <div className="tw-h-60 md:tw-h-full tw-flex tw-flex-col tw-items-center tw-relative tw-bg-transparent tw-mt-10">
      <img
        loading="lazy"
        src="/img/fsa_image/offer5.png"
        alt=""
        height={500}
        width={500}
      // className="tw-h-full tw-w-full sm:tw-h-[80%] sm:tw-w-full"
      />
    </div>
  );
};
