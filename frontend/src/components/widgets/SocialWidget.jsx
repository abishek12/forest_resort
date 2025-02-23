import React from "react";
import { HashLink as Link } from "react-router-hash-link";
// import { FiFacebook, FaInstagram, FaLinkedinIn} from "react-icons/fa";

const SocialWidget = () => {
  return (
    <>
      <div className="sidebar-item social-sidebar">
        <div className="relative mb-2">
          <p className="mb-1 text-sm text-black tw-font-bold">Follow Us</p>
          <svg width="22%" height="2" border="2px" className="absolute">
            <line x2="100%" y2="100%" stroke="#1A7218F2" strokeWidth="5" />
          </svg>
        </div>

        <div className="icon-container flex flex-wrap tw-space-x-2 tw-p-2 tw-text-xl">
          <a
            className="facebook px-2 py-[1/2px] cursor-pointer tw-rounded-full justify-center items-center tw-bg-[#02952A]"
            href=""
          >
            <i class="fab fa-facebook-f tw-text-white "></i>
          </a>

          <a
            className="instagram px-1 py-[1/2px] cursor-pointer tw-rounded-full justify-center items-center tw-bg-[#02952A] "
            href="https://www.instagram.com/forest_sports_arena/"
          >
            <i className="fab fa-instagram tw-text-white "></i>
          </a>

          <a
            className="linkedin px-1 py-[1/2px] cursor-pointer tw-rounded-full justify-center items-center tw-bg-[#02952A] "
            href="https://www.linkedin.com/company/forest-resort-recreation-center/"
          >
            <i className="fab fa-linkedin-in tw-text-white "></i>
          </a>

          <a
            className=" px-1 py-[1/2px] cursor-pointer tw-rounded-full justify-center items-center tw-bg-[#02952A] "
            href=""
          >
            <i class="fab fa-x-twitter tw-text-white"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default SocialWidget;
