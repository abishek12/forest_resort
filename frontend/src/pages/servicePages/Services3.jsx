import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ServicesV3Grid from '../../components/services/ServicesV3Grid';
import WhyChooseUsV1 from '../../components/whyChoose/WhyChooseUsV1';
import PriceV1 from '../../components/price/PriceV1';
import TestimonialV1 from '../../components/testimonial/TestimonialV1';
import ProcessV1 from '../../components/process/ProcessV1';
import FooterV1 from '../../components/footer/FooterV1';

const Services3 = () => {
    return (
        <>
            <div className="wrapper">
                <HeaderV5 />
                <BreadCrumb breadCrumb="services-2" title1="Turn Information" title2="Into Actionable Insights" />
                <ServicesV3Grid />
                <WhyChooseUsV1 />
                <PriceV1 priceClass="bg-gray default-padding" />
                <TestimonialV1 />
                <ProcessV1 processClass="default-padding" />
                <FooterV1 />
            </div>
        </>
    );
};

export default Services3;