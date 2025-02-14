import { useContext, useEffect, useState } from "react";
// import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import "./Baselayout.scss";
// import MoonIcon from "../assets/icons/moon.svg";
// import SunIcon from "../assets/icons/sun.svg";
// import { ThemeContext } from "../context/ThemeContext";
// import { DARK_THEME, LIGHT_THEME } from "../constants/themeConstants";
import { FaBars } from "react-icons/fa";

const BaseLayout = () => {
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  // const { theme, toggleTheme } = useContext(ThemeContext);

  // adding dark-mode class if the dark mode is set on to the body tag
  // useEffect(() => {
  //   if (theme === DARK_THEME) {
  //     document.body.classList.add("dark-mode");
  //   } else {
  //     document.body.classList.remove("dark-mode");
  //   }
  // }, [theme]);

  return (
    <>
      <main className="page-wrapper">
        <button
          onClick={toggleSidebar}
          // style={{ marginLeft: 10, marginTop: 10, color: '#333', zIndex: 1000, backgroundColor: '#FFF' }}
          className="sidebar-toggle-btn"
        >
          <FaBars size={24} />
        </button>
        <AdminSidebar isOpen={isSidebarOpen} />

        {/* left of page */}
        {/* <AdminSidebar /> */}
        {/* right side/content of the page */}
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
      {/* <button
        type="button"
        className="theme-toggle-btn"
        onClick={toggleTheme}
      >
        <img loading="lazy" 
          className="theme-icon"
          src={theme === LIGHT_THEME ? SunIcon : MoonIcon}
          alt="icon"
        />
      </button> */}
    </>
  );
};

export default BaseLayout;
