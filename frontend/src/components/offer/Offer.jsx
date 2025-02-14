import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";
import PriceV1 from "../price/PriceV1";
import { Highlight } from "../ui/aceternity_ui/text-highlight";
import { ImgLayoutGrid } from "./layout-grid";
// import { OfferSection } from "./OfferSection";
import { OfferSection } from "./OfferSection2";

const Offer = () => {
  return (
    <>
      <HeaderV1 />
      <div className="tw-mt-20 sm:tw-px-2 md:tw-px-20 tw-text-center">
        {/* <h2 className="tw-text-4xl md:tw-text-6xl tw-font-extrabold tw-leading-[50px] md:tw-leading-[80px]">
          We bring you the
          <br />
          <Highlight className="tw-text-white">best offers</Highlight>
        </h2> */}
        <div>
          {/* <img loading="lazy" LayoutGrid /> */}
          <OfferSection />
        </div>
        {/* <h2 className="tw-text-4xl md:tw-text-5xl tw-font-extrabold tw-leading-[50px] md:tw-leading-[70px]">
          We bring you the
          <br />
          <Highlight className="tw-text-white">best offers</Highlight>
        </h2>
        <PriceV1 /> */}
      </div>
      <FooterV1 />
    </>
  );
};

export default Offer;
