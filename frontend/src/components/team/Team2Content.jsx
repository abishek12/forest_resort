import React from 'react';
import TeamV1Data from '../../jsonData/TeamV1Data.json'
import SingleTeamV1 from './SingleTeamV1';

const Team2Content = () => {
    return (
        <>
            <div className="team-style-one-area team-style-one-page default-padding-top pb-70 pb-xs-0 bg-gray">
                <div className="container">
                    <div className="row">
                        {TeamV1Data.map(team =>
                            <div className="col-xl-4 col-md-6 mb-30" key={team.id}>
                                <SingleTeamV1 team={team} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team2Content;