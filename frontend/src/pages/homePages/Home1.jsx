import React, {lazy} from "react";
import Hero from "../../components/hero/Hero";
import ServicesV1 from "../../components/services/ServicesV1";
import BlogV1 from "../../components/blog/BlogV1";
import AppComingSoon from "../../components/appcomingsoon/AppComingSoon.jsx";
import FooterV1 from "../../components/footer/FooterV1";
import { TestimonialMarquee } from "../../components/testimonial/TestimonialAnimated";
import HeaderV3 from "../../components/header/HeaderV3";
import HomeAboutIndex from "../../components/about/home-about/HomeAboutIndex";
import Follow from "./Follow";
import { motion } from "framer-motion";

const ParallaxIndex=lazy(()=>import('../../components/parallaxComponent/ParallaxIndex'));

const Home1 = () => {
  return (
    <div style={{ backgroundColor: "#d2f6d2" }}>
      {/* <HeaderV1 headerClass="dark" /> */}
      <HeaderV3 />
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1, ease:'easeInOut'}}
      >
      <Hero />
      <ParallaxIndex />
      <ServicesV1 className="mt-80" />
      {/* <AboutV1 /> */}
      <HomeAboutIndex />
      <TestimonialMarquee />
      <BlogV1 />
      <Follow />
      <AppComingSoon />
      <FooterV1 />
      </motion.div>
    </div>
  );
};

export default Home1;
