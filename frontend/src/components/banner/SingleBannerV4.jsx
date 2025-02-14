import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBannerV4 = ({ banner }) => {
  const { thumb, subTitle, title, text, btnText, btnLink, shape } = banner;

  return (
    <>
      <div className="swiper-slides banner-style-four">
        <div
          className="banner-thumb bg-cover shadow dark"
          style={{ background: `url(/img/banner/${thumb})` }}
        ></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-6 col-lg-7 col-md-10">
              <div className="content">
                <h4>{subTitle}</h4>
                <h2>{title}</h2>
                <p>{text}</p>
                <div className="button">
                  <Link
                    className="btn btn-theme btn-md animation"
                    to={`/${btnLink}#`}
                  >
                    {btnText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-four-shape">
          <img
            loading="lazy"
            src={`/img/shape/${shape}`}
            alt="Image Not Found"
          />
        </div>
      </div>
    </>
  );
};

export default SingleBannerV4;
