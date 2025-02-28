import React from "react";
import ServiceV1Data from "../../jsonData/ServiceV1Data.json";
import { motion } from "framer-motion";
import SingleServicesV1 from "./SingleServicesV1";
import { fadeInAnimationVariantsContent } from "../../utils/fadeInAnimation";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const ServicesV1 = () => {
  return (
    <>
      <div
        className="pt-215 pb-90 box-layout overflow-hidden bottom-less services-style-one-area bg-gray bg-cover "
        style={{
          backgroundImage: "url(/img/shape/banner-2.png)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">
                  <BoxReveal>Service we are offering</BoxReveal>
                </h5>
                <h2 className="title">
                  <BoxReveal width="">Turn Your Day</BoxReveal>
                  <BoxReveal width="">
                    Into
                    <Highlight>Best Day Ever</Highlight>
                  </BoxReveal>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {ServiceV1Data.slice(0, 2).map((service) => (
              <motion.div
                initial="initial"
                whileInView="animate"
                variants={fadeInAnimationVariantsContent}
                className="col-xl-4 col-lg-6 col-md-6 mb-30 m-auto"
                key={service.id}
              >
                <SingleServicesV1 service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesV1;
