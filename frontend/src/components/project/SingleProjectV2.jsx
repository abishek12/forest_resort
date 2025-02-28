import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleProjectV2 = ({ gallery }) => {
  const { id, thumb, title, titleLink, list1, list2, btnLink, btnIcon } =
    gallery;

  return (
    <>
      <div className="gallery-item">
        <div className="gallery-style-two">
          <div className="thumb">
            <img loading="lazy" src={`/img/portfolio/${thumb}`} alt="thumb" />
          </div>
          <div className="content">
            <div className="info">
              <h4>
                <Link to={`/${titleLink}/${id}#`}>{title}</Link>
              </h4>
              <ul className="gallery-list">
                <li>{list1}</li>
                <li>{list2}</li>
              </ul>
            </div>
            <div className="button">
              <Link to={`/${btnLink}/${id}#`}>
                <i className={btnIcon}></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProjectV2;
