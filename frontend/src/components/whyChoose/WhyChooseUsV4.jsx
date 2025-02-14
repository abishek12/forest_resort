import React from "react";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { HashLink as Link } from "react-router-hash-link";
import ReactWOW from "react-wow";
import WhyChooseUsV4Data from "../../jsonData/WhyChooseUsV4Data.json";
import SingleChooseV3 from "./SingleChooseV4";

const WhyChooseUsV4 = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="choose-us-style-one-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 choose-us-style-one">
              <h4 className="sub-title">Why Choose Us</h4>
              <h2 className="title">
                Were on a mission <br /> to your business grow
              </h2>
              <div className="choose-us-thumb mt-50 mt-xs-40">
                <ReactWOW animation="fadeInUp">
                  <img
                    loading="lazy"
                    src="/img/illustration/6.png"
                    alt="Image Not Found"
                  />
                </ReactWOW>
                <ReactWOW animation="fadeInDown">
                  <img
                    loading="lazy"
                    src="/img/illustration/7.png"
                    alt="Image Not Found"
                  />
                </ReactWOW>
                <ReactWOW animation="fadeInRight">
                  <img
                    loading="lazy"
                    src="/img/illustration/5.png"
                    alt="Image Not Found"
                  />
                </ReactWOW>
              </div>
            </div>
            <div className="col-lg-5 pl-70 pl-md-15 pl-xs-15 choose-us-style-one">
              <div className="curve-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 150 150"
                  version="1.1"
                >
                  <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                  <text>
                    <textPath href="#textPath">Award Winning Agency</textPath>
                  </text>
                </svg>
                <ModalVideo
                  channel="youtube"
                  autoplay
                  isOpen={isOpen}
                  videoId="95N_spFNEkY"
                  onClose={() => setOpen(false)}
                />
                <Link className="popup-youtube" onClick={() => setOpen(true)}>
                  <i className="fa-solid fa-play"></i>
                </Link>
              </div>
              <ul className="feature-process mt-75 mt-xs-0">
                {WhyChooseUsV4Data.map((choose) => (
                  <SingleChooseV3 choose={choose} key={choose.id} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV4;
