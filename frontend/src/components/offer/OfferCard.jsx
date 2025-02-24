import React from "react";

const OfferCard = () => {
  return (
    <div className="tw-container-fluid tw-mx-auto tw-flex tw-items-center tw-justify-center tw-p-4">
      <div
        className="tw-relative tw-w-full md:tw-w-3/4 lg:tw-w-2/3 tw-rounded-2xl tw-p-8 md:tw-p-12 tw-text-white tw-shadow-xl"
        style={{
          background: "linear-gradient(135deg, #02952A, #B5DE4C)",
          minHeight: "250px",
        }}
      >
        {/* Text Section */}
        <div className="tw-max-w-lg">
          <h2 className="tw-text-2xl md:tw-text-4xl tw-font-bold tw-mb-4 tw-text-black">
            Packed with generous offers
          </h2>
          <p className="tw-text-sm md:tw-text-lg tw-font-medium tw-text-gray-200">
            Forest Sports Arena is packed with thousands of features for
            athletes, adventurers, and nature lovers.
          </p>
        </div>

        <img
          src="/img/others/football.png"
          alt="Football Kick"
          className="tw-absolute tw-top-[-40px] tw-right-[-30px]  tw-h-48 md:tw-h-64 lg:tw-h-72 tw-object-contain tw-z-10"
        />
      </div>
    </div>
  );
};

export default OfferCard;
