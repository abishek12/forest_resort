import React from 'react';
import SingleTeamV2 from './SingleTeamV2';
import TeamV2Data from '../../jsonData/TeamV2Data.json'
import ReactWOW from 'react-wow';

const TeamV2 = ({ bgColor }) => {
    return (
        <>
            <div className={`${bgColor ? bgColor : ""} team-style-two-area default-padding-top pb-70 pb-xs-0`}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-12">
                            <div className="site-heading">
                                <h5 className="sub-title">Team members</h5>
                                <h2 className="title">Our professional <br /> expert team members</h2>
                            </div>
                        </div>
                        {TeamV2Data.slice(0, 5).map(team =>
                            <ReactWOW animation={team.animationClass} delay={team.animationDelay} key={team.id}>
                                <div className="col-xl-3 col-lg-4 col-md-6 mb-50">
                                    <SingleTeamV2 team={team} />
                                </div>
                            </ReactWOW>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV2;