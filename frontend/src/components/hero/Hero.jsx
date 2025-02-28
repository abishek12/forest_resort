import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="tw-mt-0 md:tw-mt-32 hero">
      <img
        loading="lazy"
        src="img/hero/forest_sports_and_recreation_center.png"
        alt="hero"
        className="image_hero"
      ></img>
    </div>
  );
};

export default Hero;
