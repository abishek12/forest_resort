import React, { useEffect, useState } from "react";
import HeaderSidebarMenu from "./HeaderSidebarMenu";
import MainMenu from "./MainMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderLogoV1 from "./HeaderLogoV1";
import MainMenu2 from "./MainMenu2";

const HeaderV1 = ({ headerClass, logoColor = false }) => {
  // Sticky Menu
  const [isSticky, setIsSticky] = useState(false);

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

  // Search Bar
  const [openSearch, setOpenSearch] = useState(false);

  const searchOpen = (event) => {
    event.preventDefault();
    setOpenSearch(!openSearch);
  };

  const searchClose = () => {
    setOpenSearch(false);
  };

  // Sidebar Menu
  // eslint-disable-next-line no-unused-vars
  const [navbarClass, setNavbarClass] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addClasses = () => {
    setNavbarClass(true);
    setIsSidebarOpen(true);
    document.body.classList.add("on-side");
  };

  const removeClasses = () => {
    setNavbarClass(false);
    setIsSidebarOpen(false);
    document.body.classList.remove("on-side");
  };

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
          className={`sticked ${
            isOpen ? "navbar-responsive" : ""
          } navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed on menu-center no-full ${headerClass} ${
            openSearch ? "smooth-search" : ""
          }`}
        >
          {/* <HeaderSearch openSearch={openSearch} searchClose={searchClose} /> */}
          <div className="container-fill d-flex justify-content-between align-items-center">
            <HeaderLogoV1 logoColor={logoColor} openMenu={openMenu} />
            <MainMenu2
              isOpen={isOpen}
              closeMenu={closeMenu}
              toggleSubMenu={toggleSubMenu}
              toggleMegaMenu={toggleMegaMenu}
            />
            <HeaderSidebarMenu
              removeClasses={removeClasses}
              isSidebarOpen={isSidebarOpen}
              addClasses={addClasses}
              searchOpen={searchOpen}
            />
          </div>
          <div className={`overlay-screen ${isOpen ? "opened" : ""}`}></div>
        </nav>
      </header>
    </>
  );
};

export default HeaderV1;
