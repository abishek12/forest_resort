import React from "react";

const SingleBrandV1 = ({ brand }) => {
  const { thumb } = brand;

  return (
    <>
      <div className="swiper-slides">
        <img loading="lazy" src={`/img/brand/${thumb}`} alt="Image Not Found" />
      </div>
    </>
  );
};

export default SingleBrandV1;
