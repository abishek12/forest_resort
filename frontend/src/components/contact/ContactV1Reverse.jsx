import React from "react";
import ContactForm from "../form/ContactForm";
import ContactInfo from "./ContactInfo";

const ContactV1Reverse = () => {
  return (
    <>
      <div
        className="contact-area overflow-hidden default-padding tw-bg-[#D3F7D2]"
        // style={{ backgroundImage: "url(/img/shape/map.png)" }}
      >
        <div className="container col">
          <div className="row align-center">
          <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50 -tw-translate-y-20">
              <ContactInfo />
            </div>
            <div className="col-tact-stye-one col-lg-6 -tw-translate-y-8">
              <ContactForm />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactV1Reverse;
