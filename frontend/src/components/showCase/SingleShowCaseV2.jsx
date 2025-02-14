import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleShowCaseV2 = ({ showcase }) => {
  const { thumb, title, text, btnLink, btnText, shape } = showcase;

  return (
    <>
      <div className="swiper-slide">
        <div className="case-style-two">
          <div className="row">
            <div className="col-xl-6">
              <div className="case-thumb">
                <img
                  loading="lazy"
                  src={`/img/gallery/${thumb}`}
                  alt="Image Not Found"
                />
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="info text-light"
                style={{ backgroundImage: `url(/img/shape/${shape})` }}
              >
                <h2>{title}</h2>
                <p>{text}</p>
                <Link
                  className="btn btn-md btn-dark animation"
                  to={`/${btnLink}#`}
                >
                  {btnText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleShowCaseV2;
