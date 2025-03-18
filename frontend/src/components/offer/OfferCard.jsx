import { useState, useEffect, startTransition } from "react";

const OfferCard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    startTransition(() => {
      setTimeout(() => setLoading(false), 1000); // Simulating async work
    });
  }, []);

  // if (loading) {
  //   return <div className="tw-text-center tw-text-lg tw-font-bold">Loading...</div>;
  // }

  return (
    <div className="tw-container-fluid tw-mx-auto tw-flex tw-items-center tw-justify-center tw-p-4">
      <div className="tw-w-full sm:tw-w-4/5 md:tw-w-3/4 lg:tw-w-2/3 tw-rounded-2xl tw-p-6 md:tw-p-12 tw-text-white tw-shadow-xl tw-flex tw-flex-col md:tw-flex-row tw-items-center tw-bg-gradient-to-r tw-from-green-700 tw-to-green-400">
        {/* Image Section */}
        <div className="tw-flex tw-justify-center tw-w-full md:tw-w-1/3">
          <img
            src="/img/others/football.png"
            alt="Football Kick"
            className="tw-h-32 sm:tw-h-40 md:tw-h-52 lg:tw-h-64 tw-object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="tw-text-center md:tw-text-left tw-w-full md:tw-w-2/3 tw-mt-4 md:tw-mt-0">
          <h2 className="tw-text-xl sm:tw-text-2xl md:tw-text-3xl lg:tw-text-4xl tw-font-bold tw-mb-2 sm:tw-mb-4 tw-text-black">
            Packed with generous offers
          </h2>
          <p className="tw-text-xs sm:tw-text-sm md:tw-text-base tw-font-medium tw-text-gray-200">
            Forest Sports Arena is packed with thousands of features for
            athletes, adventurers, and nature lovers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
