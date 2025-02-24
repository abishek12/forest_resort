import React from "react";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV1 from "../../components/footer/FooterV1";
import ContactV1Reverse from "../../components/contact/ContactV1Reverse";
import HeaderV1 from "../../components/header/HeaderV1";
import ContactV1 from "../../components/contact/ContactV1";
import { MdHome } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";

const ContactUs = () => {
  return (
    <>
      <HeaderV1 />
      {/* <BreadCrumb
        breadCrumb="contact-us"
        title1="Get in touch with us"
        bottomSpace="pb-0"
      /> */}
       <div className="tw-text-[#D2EDD6] text-sm mb-4 tw-pt-[150px] tw-py-5 flex items-center space-x-2">
                <span className="tw-font-semibold text-black tw-flex items-center tw-translate-x-14">
                  <MdHome className="tw-text-3xl tw-translate-y-3 -tw-translate-x-6" />
                  <a
                    href="/home"
                    className="ml-1 tw-font-semibold tw-px-2 -tw-translate-x-5 tw-translate-y-4"
                  >
                    Home
                  </a>
                  <span className="text-black">
                    <BiSolidRightArrow className="tw-translate-y-6 -tw-translate-x-6" />
                    <a
                      href="/contact-us"
                      className="tw-font-semibold tw-text-[#1A7218F2] tw-px-"
                    >
                      Contact Us
                    </a>
                  </span>
                </span>
      
                <svg width="90%" height="2" border="2px" className="absolute mt-4 tw-translate-x-10">
                  <line x2="100%" y2="100%" stroke="#000000" strokeWidth="5" />
                </svg>
                <div className="tw-translate-y-4 tw-translate-x-10">
                  <span className="text-black tw-font-bold tw-text-2xl">
                    Get in touch with us
                  </span>
                </div>
              </div>
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
      <div className="tw-flex tw-justify-center">
          <p className="app tw-flex tw-justify-center tw-font-semibold tw-text-[#FFFFFF] tw-py-3 tw-rounded-full mt-5 tw-w-[204px]"
            style={{
              background: "linear-gradient(to right, #1A7218, #B5DE4C)",
            }} >
            Forest Arena App
          </p>
      </div>
      <FooterV1 />
    </>
  );
};

export default ContactUs;
