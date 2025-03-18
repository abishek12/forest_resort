import FooterV1 from "../footer/FooterV1";
import HeaderV1 from "../header/HeaderV1";

import { OfferSection } from "./OfferSection2";
import { Breadcrumb } from "../widgets/Breadcrumb";
import AppComingSoon from "../appcomingsoon/AppComingSoon";

const Offer = () => {
  return (
    <>
      <HeaderV1 />
      <div className="container tw-pt-20">
        <Breadcrumb page="Offers" />
      </div>
      <OfferSection />
      <div className="tw-mt-8">
      <AppComingSoon/>
      </div>
      <FooterV1 />
    </>
  );
};

export default Offer;
