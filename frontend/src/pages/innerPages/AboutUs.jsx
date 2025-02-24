import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import AboutV2 from '../../components/about/AboutV2';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TeamV2 from '../../components/team/TeamV2';
import FooterV1 from '../../components/footer/FooterV1';
import { TestimonialMarquee } from '../../components/testimonial/TestimonialAnimated';

import { MdHome } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";

const AboutUs = () => {
    return (
        <div className='tw-bg-[#d2f6d2]'>
            <HeaderV1 headerClass="dark" />
                  <div className="tw-text-[#D2EDD6] text-sm mb-4 tw-pt-[150px] tw-py-5 flex items-center space-x-2">
                    <span className="tw-font-semibold text-black tw-flex items-center tw-translate-x-14">
                      <MdHome className="tw-text-3xl tw-translate-y-3 -tw-translate-x-6" />
                      <a
                        href="/home"
                        className="ml-1 tw-font-semibold tw-px-2 -tw-translate-x-5 tw-translate-y-4"
                      >
                        Home
                      </a>
                      <span className="text-black">
                        <BiSolidRightArrow className="tw-translate-y-6 -tw-translate-x-6" />
                        <a
                          href="/contact-us"
                          className="tw-font-semibold tw-text-[#1A7218F2] tw-px-"
                        >
                          About Us
                        </a>
                      </span>
                    </span>
            
                    <svg
                      width="90%"
                      height="2"
                      border="2px"
                      className="absolute mt-4 tw-translate-x-10"
                    >
                      <line x2="100%" y2="100%" stroke="#000000" strokeWidth="5" />
                    </svg>
                    <div className="tw-translate-y-4 tw-translate-x-10">
                      <span className="text-black tw-font-bold tw-text-2xl">
                        About Us
                      </span>
                    </div>
                  </div>
            {/* <BreadCrumb breadCrumb="about-us" title1="About Us" bottomSpace="pb-0" /> */}
            <AboutV2 />
            <WhyChooseUsV2 />
            {/* <TestimonialV2/> */}
            <TestimonialMarquee />
            {/* <TeamV2 bgColor="bg-gray" /> */}
            <FooterV1 />
        </div>
    );
};

export default AboutUs;