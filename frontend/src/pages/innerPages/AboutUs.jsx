import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import AboutV2 from '../../components/about/AboutV2';
import WhyChooseUsV2 from '../../components/whyChoose/WhyChooseUsV2';
import TestimonialV2 from '../../components/testimonial/TestimonialV2';
import TeamV2 from '../../components/team/TeamV2';
import FooterV1 from '../../components/footer/FooterV1';
import { TestimonialMarquee } from '../../components/testimonial/TestimonialAnimated';

const AboutUs = () => {
    return (
        <div className='tw-bg-[#d2f6d2]'>
            <HeaderV1 headerClass="dark" />
            <BreadCrumb breadCrumb="about-us" title1="About Us" bottomSpace="pb-0" />
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