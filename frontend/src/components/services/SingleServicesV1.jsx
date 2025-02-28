import React from "react";
import { useLocation } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { CardBody, CardContainer, CardItem } from "../ui/aceternity_ui/3dcard";
import { TextGenerateEffect } from "../ui/aceternity_ui/text-generate-effect";
import BoxReveal from "../ui/magic_ui/box-reveal";

const SingleServicesV1 = ({ service }) => {
  const { id, serviceLink, icon1, icon1Dark, icon2, text, title } = service;

  const location = useLocation();
  const pathname = location.pathname;
  const iconName = pathname === "/" ? `${icon1}` : `${icon1Dark}`;

  return (
    <CardContainer className="tw-my-5">
      <CardBody className="services-style-one">
        <CardItem translateZ="80" rotateX={10} rotateZ={-5}>
          <img loading="lazy" src={`/img/icon/${iconName}`} alt="Icon" />
        </CardItem>
        <Link to={`/${serviceLink}/${id}#`} className="btn-arrow">
          <CardItem translateZ="80" rotateX={10}>
            <i className={icon2}></i>
          </CardItem>
        </Link>
        <CardItem translateZ="80" rotateX={10}>
          <h4>
            <Link to={`/${serviceLink}/${id}#`}>
              <BoxReveal boxColor={"#d2f6d2"}>{title}</BoxReveal>
            </Link>
          </h4>
          <p>
            <BoxReveal boxColor={"#d2f6d2"}>
              <TextGenerateEffect words={text} className={"tw-font-normal"} />
            </BoxReveal>
          </p>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default SingleServicesV1;
