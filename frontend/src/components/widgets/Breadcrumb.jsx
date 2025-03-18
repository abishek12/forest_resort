import React from "react";
import { MdHome } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";

export const Breadcrumb = ({page}) => {
  return (
    <div className="tw-text-[#D2EDD6] text-sm mb-4 tw-pt-20 flex items-center space-x-2">
      <span className="tw-font-semibold text-black tw-flex items-center">
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
            href="/blogs"
            className="tw-font-semibold tw-text-[#1A7218F2] tw-px-"
          >
            {page}
          </a>
        </span>
      </span>

      <svg width="100%" height="2" border="2px" className="absolute mt-4">
        <line x2="100%" y2="100%" stroke="#000000" strokeWidth="5" />
      </svg>
    </div>
  );
};
