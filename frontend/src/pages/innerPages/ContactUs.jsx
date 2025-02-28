import React from "react";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import ContactV1Reverse from "../../components/contact/ContactV1Reverse";
import HeaderV1 from "../../components/header/HeaderV1";
import ContactV1 from "../../components/contact/ContactV1";

const ContactUs = () => {
  return (
    <>
      <HeaderV1 />
      <BreadCrumb
        breadCrumb="contact-us"
        title1="Get in touch with us"
        bottomSpace="pb-0"
      />
      <ContactV1Reverse />
      {/* <ContactV1 /> */}

      {/* Google Map Section */}
      <section className="google-map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.786424459564!2d83.96541697548558!3d28.213800775895947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595dbc053a383%3A0xf39cc33966264a6b!2sForest%20Sports%20Arena!5e0!3m2!1sen!2snp!4v1729829938705!5m2!1sen!2snp"
          height={570}
          style={{ border: 0, width: "100%" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
      <FooterV1 />
    </>
  );
};

export default ContactUs;
