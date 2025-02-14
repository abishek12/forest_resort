import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import FooterV1 from '../../components/footer/FooterV1';
import Team2Content from '../../components/team/Team2Content';

const Team2 = () => {
    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="team-2" title1="Professional team members" />
            <Team2Content />
            <FooterV1 />
        </>
    );
};

export default Team2;