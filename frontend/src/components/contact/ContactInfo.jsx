import React from "react";
import SocialShare2 from "../others/SocialShare2";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Highlight } from "../ui/aceternity_ui/text-highlight";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info">
        <div className="mb-40">
          <h2>
            <BoxReveal>
              <Highlight className={"tw-text-white"}>
                Contact Information
              </Highlight>
            </BoxReveal>
          </h2>
          <p>
            <BoxReveal>
              Please reach out to us if you have any queries.
            </BoxReveal>
          </p>
        </div>
        <ul className="contact-address">
          <li className="wow fadeInUp">
            <div className="content">
              <h4 className="title">Phone</h4>
              <a>
                <BoxReveal>9804185602,9856085602,9814176490, 061-581637</BoxReveal>
              </a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="300ms">
            <div className="info">
              <h4 className="title">Location</h4>
              <p>
                <BoxReveal>
                  Bulaudi 7, Nwarthok, on the banks of river bulaudi, Pokhara,
                  Nepal
                </BoxReveal>
              </p>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="500ms">
            <div className="info">
              <h4 className="title">Official Email</h4>
              <a href="mailto:forestsports21@gmail.com">
                <BoxReveal>forestsports21@gmail.com</BoxReveal>
              </a>
            </div>
          </li>
          <li className="wow fadeInUp" data-wow-delay="700ms">
            <div className="info">
              <h4 className="title">Follow Us</h4>
              <ul className="social-link">
                <SocialShare2 />
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
