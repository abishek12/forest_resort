import React from "react";
import SingleServiceV2 from "./SingleServiceV2";
import ServiceV2Data from "../../jsonData/ServiceV2Data.json";
import { motion } from "framer-motion";
import { fadeInCards } from "../../utils/fadeInAnimation";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const ServicesV2Grid = ({ serviceClass }) => {
  return (
    <>
      <div
        className={`services-style-two-area service-two-grid bottom-less ${serviceClass}`}
      >
        <div className="site-heading text-center">
          <h5 className="sub-title">
            <BoxReveal>Facilities We Provide</BoxReveal>
          </h5>
          <h2 className="title">
            <BoxReveal width="">
              <Highlight>Top Facilities</Highlight>
            </BoxReveal>
          </h2>
        </div>
        <div className="container">
          <div className="row">
            {ServiceV2Data.map((service) => (
              <motion.div
                whileHover={{ scale: 1.05 }}
                variants={fadeInCards}
                initial="initial"
                whileInView="animate"
                custom={service.id}
                className="col-xl-4 col-lg-6 col-md-6 mb-30"
                key={service.id}
              >
                <SingleServiceV2 service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV2Grid;
