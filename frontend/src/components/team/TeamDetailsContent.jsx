import React from "react";
import SocialShare from "../others/SocialShare";
import CountUp from "react-countup";
import { HashLink as Link } from "react-router-hash-link";
import QualificationData from "../../jsonData/QualificationData.json";
import SingleQualification from "../qualification/SingleQualification";
import SkillProgressData from "../../jsonData/SkillProgressData.json";
import SingleSkills from "../qualification/SingleSkills";

const TeamDetailsContent = ({ teamInfo }) => {
  const {
    thumb,
    name,
    profession,
    memberInfo,
    projectCount,
    eMail,
    contactNumber,
  } = teamInfo;

  return (
    <>
      <div className="team-single-area default-padding-top">
        <div className="container">
          <div className="team-content-top">
            <div className="row">
              <div className="col-xl-6 left-info">
                <div className="thumb">
                  <img loading="lazy" src={`/img/team/${thumb}`} alt="Thumb" />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="team-right-info bg-dark text-light">
                  <h2>{name}</h2>
                  <span>{profession}</span>
                  <p>{memberInfo}</p>
                  <div className="team-experience mt-30">
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer">
                          <CountUp end={projectCount} duration={3} />
                        </div>
                        <div className="operator">+</div>
                      </div>
                      <span className="medium">Project done over 30 years</span>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <strong>Email:</strong>
                      <a href={`mailto:${eMail}`}>{eMail}</a>
                    </li>
                    <li>
                      <strong>Phone:</strong>
                      <a href={`tel:${contactNumber}`}>{contactNumber}</a>
                    </li>
                  </ul>
                  <div className="social">
                    <Link
                      className="btn circle btn-sm btn-gradient animation"
                      to="/contact-us#"
                    >
                      Contact Me
                    </Link>
                    <div className="share-link">
                      <i className="fas fa-share-alt"></i>
                      <ul>
                        <SocialShare />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-info default-padding">
          <div className="container">
            <div className="row">
              <div className="col-xl-6">
                <h2>Qualifications</h2>
                <div className="qualification-grid">
                  {QualificationData.map((qualification) => (
                    <SingleQualification
                      qualification={qualification}
                      key={qualification.id}
                    />
                  ))}
                </div>
              </div>
              <div className="col-xl-6">
                <div className="skill-items pl-50 pl-md-0 pl-xs-0 mt-md-50 mt-xs-30">
                  <h2>Personal Skills</h2>
                  {SkillProgressData.map((skills) => (
                    <SingleSkills skills={skills} key={skills.id} />
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

export default TeamDetailsContent;
