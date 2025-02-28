import React from "react";
import PriceV2Data from "../../jsonData/PriceV2Data.json";
import SinglePriceV2 from "./SinglePriceV2";
import { motion } from "framer-motion";
import { fadeInCards } from "../../utils/fadeInAnimation";

const PriceV2 = () => {
  return (
    <>
      <div className="pricing-area pricing-gird tw-pt-14 bottom-less">
        <div className="container">
          <div className="pricing-style-two-items">
            <div className="row">
              {PriceV2Data.map((price) => (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  variants={fadeInCards}
                  initial="initial"
                  whileInView="animate"
                  custom={price.id}
                  className="col-xl-4 col-md-6 mb-30"
                  key={price.id}
                >
                  <SinglePriceV2 price={price} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceV2;
