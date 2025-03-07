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
        <div className="container tw-flex">
          <div className="row ">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb tw-relative xl:tw-w-[550px] xl:tw-h-[500px] lg:tw-w-[450px] md:tw-w-[320px] md:tw-h-[320px] max-sm:tw-w-[200px] max-sm:tw-h-[200px]">
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
                <div className="experience xl:!tw-top-[60px] xl:tw-m-[0px] xl:tw-left-[380px] lg:!tw-top-[-340px] lg:tw-m-[80px] lg:tw-left-[200px] md:!tw-top-[-320px] md:tw-m-[50px] md:tw-left-[150px] max-sm:!tw-top-[-220px] max-sm:tw-m-[20px] max-sm:tw-left-[150px]">
                  <h2>
                    <strong
                      className="tw-translate-x-10 xl:tw-text-8xl lg:tw-text-sm lg:tw-leading-[70px] md:tw-text-sm md:tw-leading-[70px] max-sm:tw-leading-[50px]"
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      4
                    </strong>{" "}
                    Years of Service
                  </h2>
                </div>
                <div className="bar-chart tw-absolute -tw-right-10 tw-bottom-0 xl:tw-w-fit lg:tw-w-[100px] md:tw-w-[80px] max-sm:tw-w-[60px] xl:tw-top-[320px] xl:tw-left-[480px] xl:tw-h-[40%] lg:tw-top-[233px] lg:tw-left-[390px] md:tw-top-[160px] md:tw-left-[330px] max-sm:tw-top-[25px] max-sm:tw-left-[210px]">
                  <div className="bar bar1"></div>
                  <div className="bar bar2"></div>
                  <div className="bar bar3"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40 tw-translate-x-8 xl:tw-w-[550px] xl:tw-h-fit lg:tw-w-[480px] md:tw-w-[340px] max-sm:tw-w-[400px]">
              <div className="about-two-info">
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
