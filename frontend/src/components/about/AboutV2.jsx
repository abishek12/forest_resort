import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsImg } from "../../utils/fadeInAnimation";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const AboutV2 = () => {
  return (
    <>
      <div className="about-style-two-area default-padding tw-bg-white">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb tw-relative">
                <motion.div
                  variants={fadeInAnimationVariantsImg}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{ scale: 1.04 }}
                  style={{ height: "100%" }}
                >
                  <img
                    loading="lazy"
                    src="/img/thumb/about.png"
                    alt="Image Not Found"
                  />
                </motion.div>
                <div className="experience ">
                  <h2>
                    <strong
                      className="tw-translate-x-10"
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      4
                    </strong>{" "}
                    Years of Service
                  </h2>
                </div>
                <div className="bar-chart tw-absolute -tw-right-10 tw-bottom-0">
                  <div className="bar bar1"></div>
                  <div className="bar bar2"></div>
                  <div className="bar bar3"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40 tw-translate-x-8">
              <div className="about-two-info">
                {/* <h4 className="sub-title">
                  <BoxReveal>About Us</BoxReveal>
                </h4> */}
                <h2 className="title">
                  <div>
                    <p className="tw-text-black tw-text-2xl tw-font-bold -tw-mb-1">
                      Providing the best service <br />{" "}
                    </p>
                    <span
                      className=" tw-font-semibold tw-text-[#FFFFFF] tw-py-2 tw-px-5 tw-rounded-2xl tw-text-xl "
                      style={{
                        background:
                          "linear-gradient(to right, #1A7218 83%, #B5DE4C 100%)",
                        fontFamily: "Poppins",
                      }}
                    >
                      In sports and recreation
                    </span>
                  </div>
                </h2>
                <p
                  className="tw-text-[#000000] tw-opacity-70"
                  style={{
                    fontFamily: "Poppins",
                  }}
                >
                  <BoxReveal>
                    Welcome to our premier sports and recreation center, where
                    passion meets excellence. We offer top-notch swimming,
                    futsal, and dining experiences amidst nature. Join us for
                    fun, fitness, and relaxation in a vibrant community setting,
                    and discover a place where you can thrive and connect.
                  </BoxReveal>
                </p>
                <div className="about-grid-info">
                  <Link className="btn-round-animation" to="/services#">
                    Discover More <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <ul className="list-info-item tw-translate-y-2">
                    <li>
                      <h4
                        className="tw-text-xl tw-font-extrabold"
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        <Link
                          to="services-details/1"
                          style={{
                            display: "flex",
                          }}
                        >
                          <img
                            src="/img/shape/swim.svg"
                            alt="Swimming Icon"
                            style={{
                              width: "62px",
                              height: "30px",
                              translate: "-10px",
                              marginRight: "2px",
                            }}
                          />
                          SWIMMING{" "}
                          <i className="fa-solid fa-angle-right tw-ml-14 tw-my-1"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4
                        className="tw-text-xl tw-font-extrabold"
                        style={{
                          fontFamily: "Poppins",
                        }}
                      >
                        <Link
                          to="services-details/1"
                          style={{
                            display: "flex",
                          }}
                        >
                          <img
                            src="/img/shape/futsal.svg"
                            alt="Swimming Icon"
                            style={{
                              width: "62px",
                              height: "30px",
                              translate: "-10px",
                              marginRight: "2px",
                            }}
                          />
                          FUTSAL{" "}
                          <i className="fa-solid fa-angle-right tw-ml-20 tw-translate-x-3.5 tw-my-1"></i>
                        </Link>
                      </h4>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV2;
