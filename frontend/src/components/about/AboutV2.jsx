import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsImg } from "../../utils/fadeInAnimation";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const AboutV2 = () => {
  return (
    <>
      <div className="about-style-two-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-two">
              <div className="about-two-thumb">
                <motion.div
                  variants={fadeInAnimationVariantsImg}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{ scale: 1.1 }}
                  style={{ height: "100%" }}
                >
                  <img
                    loading="lazy"
                    src="/img/thumb/about.png"
                    alt="Image Not Found"
                  />
                </motion.div>
                <div className="experience">
                  <h2>
                    <strong>4</strong> Years of Service
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 about-style-two pl-50 pl-md-15 pl-xs-15 mt-60 mt-xs-40">
              <div className="about-two-info">
                <h4 className="sub-title">
                  <BoxReveal>About Us</BoxReveal>
                </h4>
                <h2 className="title">
                  <BoxReveal>
                    Providing the best service <br />
                    <Highlight>In sports and recreation</Highlight>
                  </BoxReveal>
                </h2>
                <p>
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
                  <ul className="list-info-item">
                    <li>
                      <h4>
                        <Link to="services-details/1">
                          Swimming <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    <li>
                      <h4>
                        <Link to="services-details/2">
                          Futsal <i className="fa-solid fa-angle-right"></i>
                        </Link>
                      </h4>
                    </li>
                    {/* <li>
                                            <h4><Link to="#">Dining <i className="fa-solid fa-angle-right"></i></Link></h4>
                                        </li> */}
                    {/* <li>
                                            <h4><Link to="#">Branding <i className="fa-solid fa-angle-right"></i></Link></h4>
                                        </li> */}
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
