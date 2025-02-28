<<<<<<< HEAD
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
=======
import React from "react";
import Hero from "../../components/hero/Hero";
import BannerV1 from "../../components/banner/BannerV1";
import ServicesV1 from "../../components/services/ServicesV1";
import AboutV1 from "../../components/about/AboutV1";
import ProcessV1 from "../../components/process/ProcessV1";
import ProjectV1 from "../../components/project/ProjectV1";
import WhyChooseUsV1 from "../../components/whyChoose/WhyChooseUsV1";
import TeamV1 from "../../components/team/TeamV2";
import TestimonialV1 from "../../components/testimonial/TestimonialV1";
import BlogV1 from "../../components/blog/BlogV1";
import AppComingSoon from "../../components/appcomingsoon/AppComingSoon.jsx";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import { AboutParallax } from "../../components/about/AboutParallax";
import { TestimonialMarquee } from "../../components/testimonial/TestimonialAnimated";
import { OfferSection } from "../../components/offer/OfferSection";
import HeaderV3 from "../../components/header/HeaderV3";
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60

const Home1 = () => {
  return (
    <div style={{ backgroundColor: "#d2f6d2" }}>
      {/* <HeaderV1 headerClass="dark" /> */}
      <HeaderV3 />
<<<<<<< HEAD
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
=======
      <Hero />
      <AboutParallax />
      {/* <BannerV1 /> */}
      <ServicesV1 className="mt-80" />
      <AboutV1 />

      {/* <OfferSection /> */}

      {/* <ProcessV1 /> */}
      {/* <ProjectV1 /> */}
      {/* <WhyChooseUsV1 chooseClass="bg-gray" /> */}
      {/* <TeamV1 /> */}
      <TestimonialMarquee />
      {/* <TestimonialV1 /> */}
      <BlogV1 />
      <AppComingSoon />
      <FooterV1 />
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
    </div>
  );
};

export default Home1;
