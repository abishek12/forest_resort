import React, { useRef } from "react";
import ReactWOW from "react-wow";
import { HashLink as Link } from "react-router-hash-link";
import { motion } from "framer-motion";
import {
  fadeInAnimationVariantsContent,
  fadeInAnimationVariantsImg,
} from "../../utils/fadeInAnimation";
import { TextGenerateEffect } from "../ui/aceternity_ui/text-generate-effect";
import BoxReveal from "../ui/magic_ui/box-reveal";

const text =
  "Create unforgettable memories at our Recreation Center and Swimming Pool. Enjoy the perfect blend of leisure and fun in a serene and welcoming environment.";

const BannerV1 = () => {
  return (
    <div className="banner-style-one-area">
      {/* <div className="shape-left-top">
                <img loading="lazy"  src="img/shape/2.png" alt="Shape" />
            </div> */}
      <div className="banner-style-one">
        <div className="container">
          <div className="content">
            <div className="row align-center">
              <div className="col-xl-6 col-lg-6">
                <div className="information mt-60">
                  <ReactWOW delay="500ms" duration="400ms">
                    <motion.h2
                      initial="initial"
                      variants={fadeInAnimationVariantsContent}
                      whileInView="animate"
                      className="fadeInUp"
                    >
                      <BoxReveal>
                        Forest <strong>Arena</strong>
                      </BoxReveal>
                    </motion.h2>
                  </ReactWOW>
                  <ReactWOW delay="900ms" duration="400ms">
                    <p className="fadeInUp">
                      <TextGenerateEffect words={text} />
                    </p>
                  </ReactWOW>
                  {/* <ReactWOW delay="1200ms" duration="400ms"> */}
                  <motion.div
                    initial="initial"
                    variants={fadeInAnimationVariantsContent}
                    whileInView="animate"
                    className="button mt-40 fadeInUp"
                  >
                    <Link
                      className="btn btn-md btn-gradient animation"
                      to="/contact-us#"
                    >
                      About Us
                    </Link>
                  </motion.div>
                  {/* </ReactWOW> */}
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 pl-50 pl-md-15 pl-xs-15">
                <div className="thumb">
                  {/* <div>
                                      <motion.img
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.8 }}
                                        style={{ x: 0 }}
                                        variants={fadeInAnimationVariantsImg}
                                        initial="initial"
                                        whileInView="animate"
                                        className="" src="img/thumb/1.png" alt="Futsal" />
                                  </div> */}
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    style={{ x: 0 }}
                    variants={fadeInAnimationVariantsImg}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView="animate"
                    src="img/thumb/2.png"
                    alt="Accomodation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerV1;
