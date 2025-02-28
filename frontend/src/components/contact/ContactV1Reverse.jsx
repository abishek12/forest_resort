import React from "react";
import ContactForm from "../form/ContactForm";
import ContactInfo from "./ContactInfo";

const ContactV1Reverse = () => {
  return (
    <>
      <div
        className="contact-area overflow-hidden default-padding"
        style={{ backgroundImage: "url(/img/shape/map.png)" }}
      >
        <div className="shape-right-bottom">
          {/* <img loading="lazy"  src="/img/shape/18.png" alt="Shape" /> */}
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-6">
              <ContactForm />
            </div>
            <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1Reverse;
