import React from "react";

import OfferCard from "./OfferCard";
import { cn } from "../../utils/cn";

export function OfferSection() {
  const features = [
    {
      title: "Swim In The Nature",
      description:
        "Enjoy a *free* first session with every membership sign-up!",
      skeleton: <SkeletonOne />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-1",
    },
    {
      title: "Play Futsal with Friends",
      description: "Book now and get *10% off* your first game!",
      skeleton: <SkeletonTwo />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-1",
    },
    {
      title: "Dine With Friends and Family",
      description: "Free dessert* with every group booking of 4 or more!",
      skeleton: <SkeletonThree />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-1",
    },
    {
      title: "Dine With Friends and Family",
      description: "Free dessert* with every group booking of 4 or more!",
      skeleton: <SkeletonFour />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-1",
    },
    {
      title: "Dine With Friends and Family",
      description: "Free dessert* with every group booking of 4 or more!",
      skeleton: <SkeletonFive />,
      className: "tw-col-span-1 tw-border-b lg:tw-col-span-1",
    },
  ];

  return (
    <>
      <OfferCard />

      <section className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-relative">
          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 tw-gap-4 tw-border tw-rounded-md">
            {features.map((feature, index) => (
              <FeatureCard
                key={`feature-${index}`}
                className={`${feature.className} hover:tw-shadow-lg hover:tw-scale-105 tw-transition-all`}
              >
                <div className="tw-h-full tw-w-full">{feature.skeleton}</div>
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </>
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
