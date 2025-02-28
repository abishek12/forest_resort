import React from "react";
import AchievementV1Data from "../../jsonData/AchievementV1Data.json";
import SingleAchievementV1 from "./SingleAchievement";
import { TextGenerateEffect } from "../ui/aceternity_ui/text-generate-effect";
import BoxReveal from "../ui/magic_ui/box-reveal";

const text =
  "Create unforgettable memories at our Recreation Center and Swimming Pool. Enjoy the perfect blend of leisure and fun in a serene and welcoming environment.";

const WhyChooseUsV1 = ({ chooseClass }) => {
  return (
    <>
      <div
        className={`choose-us-style-one-area default-padding overflow-hidden ${chooseClass}`}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5">
              <div
                className="achivement-counter tw-bg-gradient-to-r tw-from-[#299029] tw-to-[#96d397]"
                // style={{ backgroundImage: 'url(img/shape/banner-4.png)' }}
              >
                {/* <div className="shape-animated-left-bottom">
                                    <img loading="lazy"  src="img/shape/11.png" alt="shape" />
                                </div> */}
                <ul>
                  {AchievementV1Data.map((achievement) => (
                    <SingleAchievementV1
                      achievement={achievement}
                      key={achievement.id}
                    />
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-6 offset-xl-1 mt-md-50 mt-xs-40">
              <div className="choose-us-card">
                <h4 className="sub-title">
                  <BoxReveal>Why Choose Us</BoxReveal>
                </h4>
                <h2 className="title">
                  <BoxReveal>
                    Top destination for <br /> recreation and refreshment
                  </BoxReveal>
                </h2>
                <p>
                  <BoxReveal>
                    <TextGenerateEffect words={text} />
                  </BoxReveal>
                </p>
                <ul className="list-check">
                  <li>
                    <BoxReveal>Clean Environment</BoxReveal>
                  </li>
                  <li>
                    <BoxReveal>Large Playground For Futsal.</BoxReveal>
                  </li>
                  <li>
                    <BoxReveal>Huge Swimming Pool</BoxReveal>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV1;
