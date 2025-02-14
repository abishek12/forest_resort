import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import BoxReveal from "../ui/magic_ui/box-reveal";

const BreadCrumb = ({
  title1,
  title2,
  breadCrumb,
  bottomSpace,
  offsetClass,
}) => {
  return (
    <>
      <div className="breadcrumb-area bg-cover tw-bg-[#d3edd6]">
        <div className="container">
          <div
            className={`breadcrumb-item ${
              bottomSpace ? bottomSpace : "pb-120"
            }`}
          >
            {/* <div className="breadcrum-shape">
                            <img loading="lazy"  src="/img/shape/16.png" alt="Image Not Found" />
                        </div> */}
            <div className="row">
              <div className={`col-lg-8 ${offsetClass ? offsetClass : ""}`}>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/#">
                        <i className="fa-solid fa-home"></i> Home
                      </Link>
                    </li>
                    <li className="active">
                      {breadCrumb ? breadCrumb : "error"}
                    </li>
                  </ol>
                </nav>
                <h1>
                  <BoxReveal>
                    {title1 ? title1 : "404 Not Found"} <br />{" "}
                    {title2 ? title2 : ""}
                  </BoxReveal>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumb;
