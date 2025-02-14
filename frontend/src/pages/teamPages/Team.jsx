import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import Team1Content from '../../components/team/Team1Content';
import FooterV1 from '../../components/footer/FooterV1';

const Team = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="team" title1="Professional team members" bottomSpace="pb-0" />
            <Team1Content />
            <FooterV1 />
        </>
    );
};

export default Team;