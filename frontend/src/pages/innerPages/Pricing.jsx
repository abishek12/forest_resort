import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import PriceV2 from '../../components/price/PriceV2';
import ProjectDeal from '../project/ProjectDeal';
import FooterV1 from '../../components/footer/FooterV1';

const Pricing = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="pricing" title1="Committed to" title2="giving the best price" bottomSpace="pb-0" />
            <PriceV2 />
            <ProjectDeal />
            <FooterV1 />
        </>
    );
};

export default Pricing;