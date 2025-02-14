import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleProjectV1 = ({ project }) => {
  const { id, thumb, projectLink, subTitle, title, shape } = project;

  return (
    <>
      <div className="swiper-slide">
        <div className="project-style-one">
          <img loading="lazy" src={`/img/portfolio/${thumb}`} alt="Thumb" />
          <div className="overlay">
            <span>{subTitle}</span>
            <h4>
              <Link to={`/${projectLink}/${id}#`}>{title}</Link>
            </h4>
          </div>
          <div className="shape">
            <img loading="lazy" src={`/img/shape/${shape}`} alt="shape" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectV1;
