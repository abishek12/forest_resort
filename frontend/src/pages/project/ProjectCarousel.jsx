import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import ProjectCarouselContent from '../../components/project/ProjectCarouselContent';
import FooterV1 from '../../components/footer/FooterV1';

const ProjectCarousel = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="project-carousel" title1="Take a look some of" title2="our recent case studies" bottomSpace="pb-0" />
            <ProjectCarouselContent />
            <FooterV1 />
        </>
    );
};

export default ProjectCarousel;