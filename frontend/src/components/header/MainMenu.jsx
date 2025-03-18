import React, { useState, useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const info = localStorage.getItem("userInfo");
    setUserInfo(info);
  }, []);

  return (
    <>
      <div
        className={`collapse navbar-collapse collapse-mobile ${
          isOpen ? "show" : ""
        }`}
        id="navbar-menu"
      >
        <img
          loading="lazy"
          src="/img/logo/logo_fsa.png"
          alt="Logo"
          className="tw-bg-[#228c22]"
        />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
        <ul className="nav navbar-nav navbar-center align-center text-center tw-font-[Prompt]">
          {/* <li className="dropdown"> */}
          <Link to={void 0} className="active">
            Home
          </Link>
          <li>
            <Link to="/about-us#">About Us</Link>
          </li>
          <li>
            <Link to="/services#">Services</Link>
          </li>
          <li>
            <Link to="/offer">Offers</Link>
          </li>
          <li>
            <Link to="/md-story">MD's Story</Link>
          </li>
          <li>
            <Link to="/blogs#">Blogs</Link>
          </li>
          <li>
            <Link to="/contact-us#">Contact Us</Link>
          </li>
        </ul>
        <div className="tw-flex tw-flex-col sm:tw-hidden tw-text-center tw-mt-10 tw-space-y-4">
          <Link to="/services-details/1/#Reserve">Reserve</Link>
          {!userInfo && <Link to="/login">Login</Link>}
          {userInfo && <Link to="/user/dashboard">Dashboard</Link>}
        </div>
      </div>
    </>
  );
};

export default MainMenu;
