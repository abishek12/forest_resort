import React from 'react';
import HeaderV5 from '../../components/header/HeaderV5';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import TeamDetailsContent from '../../components/team/TeamDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import { useParams } from 'react-router-dom';
import TeamV2Data from '../../jsonData/TeamV2Data.json'

const TeamDetails = () => {

    const { id } = useParams()
    const data = TeamV2Data.filter(team => team.id === parseInt(id))[0]

    return (
        <>
            <HeaderV5 />
            <BreadCrumb breadCrumb="team-details" title1="Team Details" bottomSpace="pb-0" />
            <TeamDetailsContent teamInfo={data} />
            <FooterV1 />
        </>
    );
};

export default TeamDetails;