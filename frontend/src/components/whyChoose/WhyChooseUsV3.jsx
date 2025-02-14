import React from "react";
import ChooseV3Data from "../../jsonData/ChooseV3Data.json";
import ChooseProgressData from "../../jsonData/ChooseProgressData.json";
import ChooseUsV3List from "./ChooseUsV3List";
import SingleChooseProgressV3 from "./SingleChooseProgressV3";

const WhyChooseUsV3 = () => {
  return (
    <>
      <div className="choose-us-style-three-area default-padding bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="video-thumb mb-30">
                <img
                  loading="lazy"
                  src="/img/thumb/7.jpg"
                  alt="Image Not Found"
                />
              </div>
              <ul className="list-info-item">
                {ChooseV3Data.map((list) => (
                  <ChooseUsV3List list={list} key={list.id} />
                ))}
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 mt-md-50 mt-xs-50">
              <div className="choose-us-syle-three">
                <h4 className="sub-title">Our Value</h4>
                <h2 className="title">
                  We Assist our clients in achieving their business{" "}
                </h2>
                <div className="skill-items mt-40">
                  {ChooseProgressData.map((progress) => (
                    <SingleChooseProgressV3
                      progress={progress}
                      key={progress.id}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV3;
