import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleTeamV2 = ({ team }) => {
  const { id, thumb, name, profession, memberLink } = team;

  return (
    <>
      <div className="team-style-two">
        <div className="thumb">
          <img loading="lazy" src={`img/team/${thumb}`} alt="Image Not Found" />
          <div className="team-info">
            <div className="content">
              <h4>
                <Link to={`/${memberLink}/${id}#`}>{name}</Link>
              </h4>
              <span>{profession}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeamV2;
