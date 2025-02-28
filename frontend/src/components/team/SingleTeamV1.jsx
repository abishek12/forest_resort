import React from "react";
import SocialShare from "../others/SocialShare";
import { HashLink as Link } from "react-router-hash-link";

const SingleTeamV1 = ({ team }) => {
  const { id, thumb, icon1, icon2, member, memberLink, designation } = team;

  return (
    <>
      <div className="team-style-one">
        <div className="thumb">
          <img
            loading="lazy"
            src={`/img/team/${thumb}`}
            alt="Image Not Found"
          />
          <div className="team-info">
            <div className="team-social">
              <div className="share-link">
                <i className={icon1}></i>
                <ul>
                  <SocialShare />
                </ul>
              </div>
              <Link to={void 0}>
                <i className={icon2}></i>
              </Link>
            </div>
            <div className="content">
              <h4>
                <Link to={`/${memberLink}/${id}#`}>{member}</Link>
              </h4>
              <span>{designation}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTeamV1;
