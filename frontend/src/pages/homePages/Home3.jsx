import React from 'react';
import BlogV3 from '../../components/blog/BlogV3';
import FeatureV1 from '../../components/feature/FeatureV1';
import WhyChooseUsV3 from '../../components/whyChoose/WhyChooseUsV4';
import ServiceV4 from '../../components/showCase/ShowCaseV1';
import ProjectV2 from '../../components/project/ProjectV2';
import PriceV1 from '../../components/price/PriceV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import TeamV1 from '../../components/team/TeamV2';
import ContactV1 from '../../components/contact/ContactV1';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV3 from '../../components/header/HeaderV3';

const Home3 = () => {
    return (
        <>
            <HeaderV3 />
            <BlogV3 />
            <FeatureV1 />
            <WhyChooseUsV3 />
            <ServiceV4 />
            <ProjectV2 />
            <PriceV1 />
            <TestimonialV1 />
            <TeamV1 bgColor="bg-gray" />
            <ContactV1 />
            <FooterV1 />
        </>
    );
};

export default Home3;