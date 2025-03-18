import React, { memo } from "react";
import ImageCard from "./ImageCard";
import CircleDecoration from "./CircleDecoration";
import TitleAndDesc from "./TitleAndDesc";
import img1 from "/img/new/swimnew.webp";
import img2 from "/img/fsa_image/swim1.webp";

const FrontComponent = () => {
  return (
    <section className="tw-w-full tw-h-[786px] tw-p-[81px] tw-relative tw-z-10">
      <div className="tw-w-[1153px] tw-h-[250px] tw-bg-cyan-500 tw-rounded-[30px] tw-opacity-30 tw-left-[150px] tw-absolute tw-top-[15px] tw-z-10 max-sm:tw-h-[150px]"></div>
      {/* images and circle */}
      <div className="tw-flex tw-gap-[85px] tw-h[410px] tw-justify-between tw-items-center">
        <div className="tw-flex tw-gap-8 tw-relative tw-z-[40] max-sm:tw-left-[-45px]">
          <div className="tw-z-[32] tw-absolute tw-left-[-2rem] ">
            <ImageCard src={img1} alt="swimming pool" />
          </div>
          <div className="tw-z-[30] tw-absolute lg:tw-left-[280px] tw-left-[18rem] md:tw-left-[180px] max-sm:!tw-left-[80px]">
            <ImageCard src={img2} alt="swimming pool" />
          </div>
          <CircleDecoration className="tw-absolute !tw-z-[31]" />
        </div>
        <TitleAndDesc />
      </div>
    </section>
  );
};

export default memo(FrontComponent);
