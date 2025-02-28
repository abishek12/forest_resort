import React from 'react';
import TeamV3Data from '../../jsonData/TeamV3Data.json'
import SingleTeamV3 from './SingleTeamV3';

const Team3Content = () => {
    return (
        <>
            <div className="team-style-three-area text-center default-padding bg-gray bottom-less">
                <div className="container">
                    <div className="row">
                        {TeamV3Data.map(team =>
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

export default Team3Content;