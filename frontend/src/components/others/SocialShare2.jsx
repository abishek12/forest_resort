import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SocialShare2 = () => {
  return (
    <>
      <a
        className="facebook px-2 py-[1/2px] cursor-pointer tw-rounded-full justify-center items-center tw-bg-[#02952A]"
        href="https://www.facebook.com/forestsportsarena/"
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
    </>
  );
};

export default SocialShare2;
