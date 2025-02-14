import React, { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import { HashLink as Link } from "react-router-hash-link";
import HeaderLogoV1 from "./HeaderLogoV1";
import { useSelector } from "react-redux";

const HeaderV3 = ({ logoColor = false }) => {
  // Sticky Menu
  const [isSticky, setIsSticky] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile Menu
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
    document.body.classList.add("no-fade");
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.classList.remove("no-fade");
  };

  // Mobile DropDown
  const toggleSubMenu = (e) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const subMenu = listItem.querySelector("ul.dropdown-menu");
    if (subMenu) {
      listItem.classList.toggle("on");
      subMenu.style.maxHeight =
        subMenu.style.maxHeight === "20000px" ? "0" : "20000px";
    }
  };

  const toggleMegaMenu = (e) => {
    e.preventDefault();
    const listItem = e.target.parentElement;
    const megaMenu = listItem.querySelector(".content");
    if (megaMenu) {
      megaMenu.classList.toggle("d-block");
      listItem.classList.toggle("on");
    }
  };

  return (
    <>
      <header>
        <nav
          className={`navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed dark no-background ${
            isSticky ? "sticked" : ""
          }`}
        >
          <div className="container-fill d-flex justify-content-between align-items-center">
            <HeaderLogoV1 logoColor={logoColor} openMenu={openMenu} />
            <MainMenu
              isOpen={isOpen}
              closeMenu={closeMenu}
              toggleSubMenu={toggleSubMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            <div className="attr-right">
              <div className="attr-nav">
                <ul>
                  <li className="button">
                    <Link to="/services-details/1/#Reserve">Reserve</Link>
                    {!userInfo && <Link to="/login">Login</Link>}
                    {userInfo && userInfo.isAdmin && (
                      <Link to="/admin/dashboard">Dashboard</Link>
                    )}
                  </li>
                </ul>
              </div>
              <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderV3;
