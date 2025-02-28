import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const HeaderLogoV1 = ({ openMenu }) => {
  return (
    <>
      <div className="navbar tw-flex tw-justify-evenly tw-w-full lg:tw-w-28">
        <Link
          // className="md:navbar-brand"
          to="/"
        >
          <img
            loading="lazy"
            src="/img/logo/logo_fsa.png"
            className="tw-bg-[#228c22] tw-mr-52 md:tw-mr-[500px] lg:tw-mr-0 tw-bg-transparent tw-rounded-md lg:tw-h-28 sm:tw-h-20 tw-h-14"
            alt="Logo"
          />
        </Link>
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
          onClick={openMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </>
  );
};

export default HeaderLogoV1;
