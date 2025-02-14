import React from 'react';
import BannerV1 from '../../components/banner/BannerV1';
import ServicesV1 from '../../components/services/ServicesV1';
import AboutV1 from '../../components/about/AboutV1';
import ProcessV1 from '../../components/process/ProcessV1';
import ProjectV1 from '../../components/project/ProjectV1';
import WhyChooseUsV1 from '../../components/whyChoose/WhyChooseUsV1';
import TeamV1 from '../../components/team/TeamV2';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import BlogV1 from '../../components/blog/BlogV1';
import FooterV1 from '../../components/footer/FooterV1';
import HeaderV1 from '../../components/header/HeaderV1';
import { useEffect } from 'react';

const Home1Dark = () => {

    useEffect(() => {
        document.body.classList.add('bg-dark');

        return () => {
            document.body.classList.remove('bg-dark');
        };
    }, []);

    return (
        <>
            <HeaderV1 headerClass="dark" logoColor={true} />
            <BannerV1 />
            <ServicesV1 />
            <AboutV1 />
            <ProcessV1 />
            <ProjectV1 />
            <WhyChooseUsV1 chooseClass="bg-gray" />
            <TeamV1 />
            <TestimonialV1 />
            <BlogV1 />
            <FooterV1 />
        </>
    );
};

export default Home1Dark;