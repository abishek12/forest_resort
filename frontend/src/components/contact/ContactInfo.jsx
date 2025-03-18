import React from "react";
import SocialShare2 from "../others/SocialShare2";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { Highlight } from "../ui/aceternity_ui/text-highlight";
import SocialWidget from "../widgets/SocialWidget";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-style-one-info tw-mt-20 ">
        <p className=" tw-w-[318px] tw-font-bold tw-text-3xl tw-text-[#000000] tw-py-4">
          We Are Always Ready To Help You And Answer Your Questions
        </p>
        <p className="tw-font-semibold tw-text-sm tw-text-black tw-py-3 tw-mb-8">
          Please Reach Out To Us If You Have Any Queries.
        </p>
      </div>
      <div class="container">
        <div class="row">
          <div className="col ">
            <span className="tw-text-xl tw-font-semibold tw-text-black tw-w-[206px]">
              Phone
            </span>
            <p className="tw-font-semibold tw-text-sm tw-text-[#000000] tw-mt-2 tw-py-2">
              9804185602, 9856085602, 9814176490, 061-581637
            </p>
          </div>
          <div className="col ">
            <span className="tw-text-xl tw-font-semibold tw-text-black tw-w-[206px]">
              Our Location
            </span>
            <p className="tw-font-semibold tw-text-sm tw-text-[#000000] tw-mt-2 tw-py-2 ">
              Bulaudi 7, Nwarthok, on the banks of river bulaudi, Pokhara, Nepal
            </p>
          </div>
          <div className="w-100 tw-py-5"> </div>
          <div className="col ">
            <span className="tw-text-xl tw-font-semibold tw-text-black tw-w-[206px]">
              Office Email
            </span>
            <p className="tw-font-semibold tw-text-sm tw-text-[#000000] tw-mt-2 tw-py-2">
              <a href="mailto:forestsports21@gmail.com" className="tw-font-semibold tw-text-sm tw-text-[#000000]">
                forestsports21@gmail.com
              </a>
            </p>
          </div>
          <div className="col">
            <span className="tw-text-xl tw-font-semibold tw-text-black tw-w-[206px]">
              Social Network
            </span>
            <div className="icon-container flex flex-wrap tw-space-x-2 tw-p-4 tw-text-xl">
          <SocialShare2/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
