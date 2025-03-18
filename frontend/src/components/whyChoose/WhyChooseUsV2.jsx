import React from "react";
import WhyChooseUsV2Data from "../../jsonData/WhyChooseUsV2Data.json";
import BoxReveal from "../ui/magic_ui/box-reveal";

const WhyChooseUsV2 = () => {
  return (
    <>
      <div className=" choose-us tw-bg-white tw-pb-2 tw-w-full">
        <div
          className="choose-us-style-two-area default-padding text-light xl:tw-mx-24 lg:tw-mx-12 md:tw-mx-12 max-sm:tw-mx-6 tw-mb-10 md:tw-mb-32 
      tw-bg-gradient-to-r tw-from-[#299029] tw-to-[#96d397] -tw-translate-x-5"
        >
          <div className="container tw-mx-auto tw-px-4">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-12">
                <div className="choose-us-style-two">
                  <h2 className="title mb-50">
                    <p className="tw-text-2xl tw-font-extrabold tw-px-10 -tw-translate-y-8 lg:tw-ml-[-10px] md:tw-text-xl md:tw-ml-[-250px] max-sm:tw-text-sm max-sm:tw-ml-[-40px]">
                      Have fun with your friends and family
                    </p>
                  </h2>
                  <ul
                    className="check-list-item tw-translate-x-10 tw-translate-y-10 tw-text-sm md:tw-w-[350px] md:tw-h-[350px] xl:!tw-ml-[-20px] lg:!tw-ml-[-120px] md:!tw-ml-[-250px] max-sm:tw-w-[350px] max-sm:tw-h-[350px]"
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
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
                  <div className="since-box tw-px-10 -tw-translate-y-8 ">
                    <div className=" xl:tw-mt-[-10px] xl:tw-ml-[-50px] lg:tw-mt-[-450px] lg:tw-ml-[500px] md:tw-mt-[-420px] md:tw-ml-[150px] max-sm:tw-mt-[-420px] max-sm:tw-ml-[40px]">
                    <p className="tw-text-xl tw-font-bold">
                      We are dedicated to serving you
                    </p>
                    <h2
                      className="text-path"
                      style={{
                        fontFamily: "Poppins",
                      }}
                    >
                      Since 2020
                    </h2>
                    </div>
                  </div>
                  <img
                    className="tw-w-[600px] tw-h-[350px] -tw-translate-y-4 xl:!tw-w-fit xl:!tw-mt-[10px] xl:!tw-ml-[10px] lg:!tw-w-[480px] lg:!tw-mt-[-10px] lg:tw-ml-[380px] md:!tw-w-[360px] md:tw-ml-[150px] md:tw-mt-[-40px] max-sm:!tw-w-[390px] max-sm:tw-mt-[320px]"
                    loading="lazy"
                    src="/img/fsa_image/swim-about.png"
                    alt="Image Not Found"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsV2;
