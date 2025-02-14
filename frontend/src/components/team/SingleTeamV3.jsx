import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleTeamV3 = ({ team }) => {
  const { id, bgThumb, thumb, memberLink, name, position } = team;

  return (
    <>
      <div className="team-style-three">
        <div
          className="thumb"
          style={{ backgroundImage: `url(/img/shape/${bgThumb}` }}
        >
          <img
            loading="lazy"
            src={`/img/team/${thumb}`}
            alt="Image Not Found"
          />
        </div>
        <div className="content">
          <h4>
            <Link to={`/${memberLink}/${id}#`}>{name}</Link>
          </h4>
          <span>{position}</span>
        </div>
      </div>
    </>
  );
};

export default SingleTeamV3;
