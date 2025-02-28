import React from "react";
import AboutV3ListData from "../../jsonData/AboutV3ListData.json";
import CountUp from "react-countup";

const AboutV3 = () => {
  return (
    <>
      <div className="about-style-three-area default-padding overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 about-style-three">
              <div className="about-three-thumb">
                <img
                  loading="lazy"
                  src="/img/thumb/6.jpg"
                  alt="Image Not Found"
                />
                <img
                  loading="lazy"
                  src="/img/thumb/5.jpg"
                  alt="Image Not Found"
                />
                <div className="experience">
                  <h2>
                    <strong>
                      <CountUp end={18} duration={3} enableScrollSpy />
                    </strong>{" "}
                    Years Experience
                  </h2>
                </div>
                <div className="animated-shape">
                  <img loading="lazy" src="/img/shape/38.png" alt="Shape" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1 about-style-three">
              <div className="about-three-info">
                <h4 className="sub-title">About our company</h4>
                <h2 className="title">
                  Working together <br /> to deliver value{" "}
                </h2>
                <p>
                  Contrasted dissimilar get joy you instrument out reasonably.
                  Again keeps at no meant stuff. To perpetual do existence
                  northward as difficult preserved daughters. Continued at up to
                  zealously necessary breakfast. Surrounded sir motionless she
                  end literature. Gay direction neglected but supported yet her.
                </p>
                <ul className="list-grid-four">
                  {AboutV3ListData.map((about) => (
                    <li key={about.id}>{about.item}</li>
                  ))}
                </ul>
                <div className="about-author">
                  <div className="thumb">
                    <img
                      loading="lazy"
                      src="/img/team/9.jpg"
                      alt="Image Not Found"
                    />
                  </div>
                  <div className="info">
                    <h4>James Baker</h4>
                    <span>CEO & Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutV3;
