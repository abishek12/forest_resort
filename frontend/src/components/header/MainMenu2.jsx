import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const MainMenu2 = ({ isOpen, closeMenu }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const info = localStorage.getItem("userInfo");
    setUserInfo(info);
  }, []);

  return (
    <div
      className={`collapse navbar-collapse collapse-mobile ${
        isOpen ? "show" : ""
      }`}
      id="navbar-menu"
    >
      <div className="mobile-logo-section">
        <img
          loading="lazy"
          src="/img/logo/logo_fsa.png"
          alt="Logo"
          className="tw-bg-[#228c22] tw-rounded-md"
        />
        <button type="button" className="navbar-toggle" onClick={closeMenu}>
          <i className="fa-solid fa-times"></i>
        </button>
      </div>
      <ul
        className="nav navbar-nav navbar-center text-center"
        style={{ fontSize: 16 }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/offer">Offers</Link>
        </li>
        <li>
          <Link to="/md-story">MD's Story</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        {!userInfo && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
        {userInfo && (
          <li>
            <Link to="/user/dashboard">Dashboard</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MainMenu2;
