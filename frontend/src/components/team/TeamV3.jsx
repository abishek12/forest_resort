import React from 'react';
import TeamV3Data from '../../jsonData/TeamV3Data.json'
import SingleTeamV3 from './SingleTeamV3';

const TeamV3 = () => {
    return (
        <>
            <div className="team-style-three-area text-center default-padding-bottom bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Team members</h5>
                                <h2 className="title">Our professional <br /> expert team members</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {TeamV3Data.slice(0, 4).map(team =>
                            <div className="col-xl-3 col-md-6 mb-30" key={team.id}>
                                <SingleTeamV3 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamV3;