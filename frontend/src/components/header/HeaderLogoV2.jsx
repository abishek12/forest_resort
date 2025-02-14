import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const HeaderLogoV2 = ({ logoColor = false, openMenu }) => {
  return (
    <>
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#navbar-menu"
          onClick={openMenu}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <Link className="navbar-brand" to="/#">
          {logoColor ? (
            <>
              <img
                loading="lazy"
                src="/img/logo/logo-light.png"
                className="logo logo-display"
                alt="Logo"
              />
              <img
                loading="lazy"
                src="/img/logo/logo-light.png"
                className="logo logo-scrolled"
                alt="Logo"
              />
            </>
          ) : (
            <>
              <img
                loading="lazy"
                src="/img/logo/logo-light.png"
                className="logo logo-display"
                alt="Logo"
              />
              <img
                loading="lazy"
                src="/img/logo/logo.png"
                className="logo logo-scrolled"
                alt="Logo"
              />
            </>
          )}
        </Link>
      </div>
    </>
  );
};

export default HeaderLogoV2;
