import React from "react";

const SingleFeature = ({ feature }) => {
  const { title, textFirst, textLast, thumb } = feature;

  return (
    <>
      <div className="feature-style-one">
        <div className="info">
          <h4>{title}</h4>
          <p>
            {textFirst} <br /> {textLast}
          </p>
        </div>
        <div className="icon">
          <img
            loading="lazy"
            src={`/img/icon/${thumb}`}
            alt="Image Not Found"
          />
        </div>
      </div>
    </>
  );
};

export default SingleFeature;
