import React from "react";
import WhyChooseUsV2Data from "../../jsonData/WhyChooseUsV2Data.json";
import BoxReveal from "../ui/magic_ui/box-reveal";

const WhyChooseUsV2 = () => {
  return (
    <>
      <div
        className="choose-us-style-two-area default-padding text-light md:tw-mx-24 tw-mb-10 md:tw-mb-32 tw-rounded-md 
      tw-bg-gradient-to-r tw-from-[#299029] tw-to-[#96d397]"
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="choose-us-style-two">
                <h2 className="title mb-50">
                  <BoxReveal boxColor={"#90cf91"}>
                    Have fun with your friends and family
                  </BoxReveal>
                </h2>
                <ul className="check-list-item">
                  {WhyChooseUsV2Data.map((choose) => (
                    <li key={choose.id}>
                      <h4>
                        <BoxReveal boxColor={"#90cf91"}>
                          {choose.title}
                        </BoxReveal>
                      </h4>
                      <p>
                        <BoxReveal boxColor={"#90cf91"}>
                          {choose.text}
                        </BoxReveal>
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-7 offset-xl-1 text-end">
              <div className="choose-us-style-two-thumb">
                {/* <div className="curve-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 150 150"
                    version="1.1"
                  >
                    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
                    <text>
                      <textPath href="#textPath">
                        Top Spot for Recreation and Refreshment
                      </textPath>
                    </text>
                  </svg>
                </div> */}
                <h4>We are dedicated to serving you</h4>
                <h2 className="text-path">since 2020</h2>
                <img
                  loading="lazy"
                  src="/img/fsa_image/swim-about.png"
                  alt="Image Not Found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV2;
