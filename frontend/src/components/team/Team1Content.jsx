import React from 'react';
import TeamV2Data from '../../jsonData/TeamV2Data.json'
import ReactWOW from 'react-wow';
import SingleTeamV2 from './SingleTeamV2';

const Team1Content = () => {
    return (
        <>
            <div className="team-style-two-area default-padding-top pb-70 pb-xs-0">
                <div className="container">
                    <div className="row align-center">
                        {TeamV2Data.map(team =>
                            <ReactWOW animation={team.animationClass} delay={team.animationDelay} key={team.id}>
                                <div className="col-lg-4 col-md-6 mb-50">
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

export default Team1Content;