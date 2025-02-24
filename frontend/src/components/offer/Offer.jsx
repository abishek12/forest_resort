import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";

import { OfferSection } from "./OfferSection2";
import { Breadcrumb } from "../widgets/Breadcrumb";

const Offer = () => {
  return (
    <>
      <HeaderV1 />
      <div className="container tw-pt-20">
        <Breadcrumb page="Offers" />
      </div>
      <OfferSection />
      <FooterV1 />
    </>
  );
};

export default Offer;
