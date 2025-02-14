import React from "react";
import PriceV1CardData from "../../jsonData/PriceV1CardData.json";
import SinglePriceV1 from "./SinglePriceV1";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const PriceV1 = ({ priceClass, lightShape = false }) => {
  return (
    <>
      <div
        className={`pricing-area default-padding-bottom tw-border tw-border-black tw-bg-cover tw-bg-center ${priceClass}`}
        style={{
          backgroundImage: "url(/img/about/price2.svg)",
        }}
      >
        <div className="container">
          <div className="row align-center">
            <div className="col-xl-5">
              <div className="mb-40">
                {/* <h4 className="sub-title">
                                    <BoxReveal>
                                        Our Pricing
                                    </BoxReveal>
                                </h4> */}
                <h2 className="title tw-text-center md:tw-text-left tw-mt-10 sm:tw-mt-0">
                  <BoxReveal>
                    <Highlight>Enjoy Our Monthly Packages</Highlight>
                  </BoxReveal>
                </h2>
              </div>
              {/* <div className="pricing-tab">
                                <nav>
                                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                        <button className="nav-link active" id="price-montly-tab" data-bs-toggle="tab" data-bs-target="#price-montly" type="button" role="tab" aria-controls="price-montly" aria-selected="true">
                                            Monthly
                                        </button>
                                        <button className="nav-link" id="price-yearly-tab" data-bs-toggle="tab" data-bs-target="#price-yearly" type="button" role="tab" aria-controls="price-yearly" aria-selected="false">
                                            Yearly
                                        </button>
                                    </div>
                                </nav>
                                <div className="shape-arrow">
                                    {lightShape ? <><img loading="lazy"  src="/img/shape/24-theme.png" alt="Image not found" /></>
                                        : <><img loading="lazy"  src="/img/shape/24.png" alt="Image not found" /></>}
                                </div>
                            </div> */}
            </div>
            <div className="col-xl-7 mb-50 mb-xs-10 pl-50 pl-md-30 pr-md-0 pl-xs-15 mt-md-50 mt-xs-50">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="price-montly"
                  role="tabpanel"
                  aria-labelledby="price-montly-tab"
                >
                  <div className="row">
                    {PriceV1CardData.slice(0, 2).map((price) => (
                      <SinglePriceV1 price={price} key={price.id} />
                    ))}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="price-yearly"
                  role="tabpanel"
                  aria-labelledby="price-yearly-tab"
                >
                  <div className="row">
                    {PriceV1CardData.slice(2, 4).map((price) => (
                      <SinglePriceV1 price={price} key={price.id} />
                    ))}
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

export default PriceV1;
