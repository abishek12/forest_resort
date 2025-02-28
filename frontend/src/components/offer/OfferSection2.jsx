import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { listOffers } from "../../actions/offerActions";
import OfferCard from "./OfferCard";
import { cn } from "../../utils/cn";

export function OfferSection() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      setLoading(true);
      const data = await listOffers("", 1, 10, "desc");
      setOffers(data);
    } catch (error) {
      toast.error("Error fetching offers");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <OfferCard />

      <section className="tw-container tw-mx-auto tw-px-4">
        <div className="tw-relative">
          <div className="tw-grid tw-grid-cols-2 sm:tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 tw-gap-4 tw-border tw-rounded-md">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="tw-text-red-500">{error}</p>
            ) : (
              offers.map((offer, index) => (
                <FeatureCard
                  key={index}
                  className="tw-col-span-1 tw-border-b lg:tw-col-span-1 hover:tw-shadow-lg hover:tw-scale-105 tw-transition-all mt-4"
                >
                  <div className="tw-h-full tw-w-full">
                    <img
                      loading="lazy"
                      src={offer.featured_image}
                      alt={offer.title}
                      height={500}
                      width={500}
                      className="tw-rounded-md"
                    />
                    <h3 className="tw-text-lg tw-font-semibold tw-mt-2">
                      {offer.title}
                    </h3>
                    <p className="tw-text-sm">{offer.description}</p>
                  </div>
                </FeatureCard>
              ))
            )}
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
        `tw-p-4 sm:tw-p-8 tw-relative tw-overflow-hidden tw-bg-white tw-shadow-md tw-rounded-lg`,
        className
      )}
    >
      {children}
    </div>
  );
};
