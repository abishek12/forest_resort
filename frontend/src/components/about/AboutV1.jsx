import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsContent } from "../../utils/fadeInAnimation";
import BoxReveal from "../ui/magic_ui/box-reveal";

const AboutV1 = () => {
  // const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about-style-one-area">
        <div className="default-padding">
          <div className="container">
            <div className="row">
              <div className="about-style-one">
                <h2 className="title text-light pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30 ">
                  <BoxReveal>
                    <div className="featuresthree tw-text-xl md:tw-text-5xl tw-p-1 sm:tw-p-5">
                      Swim In Harmony with Nature
                    </div>
                  </BoxReveal>
                </h2>
                <img
                  loading="lazy"
                  src="/img/fsa_image/swim2.jpeg"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    border: "1px solid green",
                    width: "100%",
                  }}
                  alt="Forest Sports Arena Swimming Pool"
                  className="-tw-mt-16 md:tw-mt-[-160px]"
                />
                {/* <motion.div
                    variants={fadeInAnimationVariantsContent}
                    initial="initial"
                    whileInView="animate"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="thumb bg-cover"
                    style={{
                      backgroundImage: "url(img/fsa_image/swim4.jpg)",
                      // marginRight: '-23%'
                    }}
                  > */}
                {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tT2puL7IZOE" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)}>
                                        <div className="effect"></div>
                                        <span><i className="fa-solid fa-play"></i> OUR STORY</span>
                                    </Link> */}
                {/* </motion.div> */}
              </div>
              <div className="col-xl-5">
                <div
                  className="about-style-one features"
                // style={{ backgroundImage: "url(img/shape/7.png)" }}
                >
                  <ul className="check-list-item tw-text-sm sm:tw-text-lg">
                    <li>
                      <h5>
                        <BoxReveal>
                          Huge Swimming Pool with Training Facilities
                        </BoxReveal>
                      </h5>
                      <p>
                        <BoxReveal boxColor={"#d2f6d2"}>
                          With professional instructors and a safe, clean
                          environment, it’s ideal for both beginners and
                          seasoned swimmers.
                        </BoxReveal>
                      </p>
                      {/* <p>
                                            Consectetur adipisci velitsed quia non numquam eius tempralabore et dolore magnam aliquam quaerat
                                        </p> */}
                    </li>
                    {/* <li>
                                        <h5>Solutions Provider</h5>
                                        <p>
                                            Know more about digital direct response than virtually any digital marketing agency in the industry.
                                        </p>
                                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="default-padding pt-0">
          <div className="container">
            <div className="row">
              <div className="about-style-one">
                <h2 className="title text-light pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30 ">
                  <BoxReveal>
                    <div className="featuresthree tw-text-xl md:tw-text-5xl tw-p-1 sm:tw-p-5">
                      Enjoy Futsal With Friends
                    </div>
                  </BoxReveal>
                </h2>
                <img
                  loading="lazy"
                  src="/img/fsa_image/futsal2.jpeg"
                  style={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "20px",
                    border: "1px solid green",
                    width: "100%",
                  }}
                  alt="Image Not Found"
                  className="-tw-mt-16 md:tw-mt-[-160px]"
                />
                {/* <motion.div
                    variants={fadeInAnimationVariantsContent}
                    initial="initial"
                    whileInView="animate"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="thumb bg-cover"
                    style={{
                      backgroundImage: "url(img/fsa_image/swim4.jpg)",
                      // marginRight: '-23%'
                    }}
                  >
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="tT2puL7IZOE" onClose={() => setOpen(false)} />
                                    <Link className="mfp-iframe popup-youtube video-play-button with-text mt-20" onClick={() => setOpen(true)}>
                                        <div className="effect"></div>
                                        <span><i className="fa-solid fa-play"></i> OUR STORY</span>
                                    </Link>
                {/* </motion.div>
              </div>
              <div className="col-xl-5">
                <div
                  className="about-style-one features"
                  // style={{ backgroundImage: "url(img/shape/7.png)" }}
                >
                  <ul className="check-list-item tw-text-sm sm:tw-text-lg">
                    <li>
                      <h5>
                        <BoxReveal>
                          State-of-the-Art Futsal Court with Training Facilities
                        </BoxReveal>
                      </h5>
                      <p>
                        <BoxReveal boxColor={"#d2f6d2"}>
                          With professional coaches and a safe, clean
                          environment, it’s ideal for both beginners and
                          seasoned players.
                        </BoxReveal>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="default-padding">
          <div className="container">
            <div className="row">

              <div className="col-xl-6 col-lg-10">
                <div className="about-style-one">
                  <h2 className="title pl-120 pl-md-0 pl-xs-0 mb-70 mb-md-40 mb-xs-30 mt-md-50 mt-xs-30">
                    <BoxReveal>
                      Play <strong>Futsal </strong>
                    </BoxReveal>
                  </h2>
                  <motion.div
                    variants={fadeInAnimationVariantsContent}
                    initial="initial"
                    whileInView="animate"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className="thumb bg-cover"
                    style={{
                      backgroundImage: "url(img/banner/futsal_match.png)",
                      marginRight: '-23%'
                    }}
                  >
                  </motion.div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-12">
                <div
                  className="about-style-one features ml-30"
                  style={{ backgroundImage: "url(img/shape/7.png)" }}
                >
                  <ul className="check-list-item">
                    <li>
                      <h5>
                        <BoxReveal>
                          State-of-the-Art Futsal Court with Training Facilities
                        </BoxReveal>
                      </h5>
                      <p>
                        <BoxReveal boxColor={"#d2f6d2"}>
                          With professional coaches and a safe, clean environment,
                          it’s ideal for both beginners and seasoned players.
                        </BoxReveal>
                      </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AboutV1;
