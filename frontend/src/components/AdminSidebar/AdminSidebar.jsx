import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";

import {
  MdOutlineAttachMoney,
  MdOutlineBarChart,
  MdOutlineClose,
  MdOutlineCurrencyExchange,
  MdOutlineGridView,
  MdOutlineLogout,
  MdOutlineMessage,
  MdDocumentScanner,
  MdOutlinePeople,
  MdPageview,
  MdOutlineSettings,
  MdMedication,
  MdOutlineShoppingBag,
  MdDynamicForm,
  MdOutlineDynamicForm,
  MdDescription,
  MdPreview,
} from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { logout } from "../../actions/authentication/userLogout";
import { useDispatch } from "react-redux";

const AdminSidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    navigate("/");
    dispatch(logout());
  };

  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // closing the navbar when clicked outside the sidebar area
  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-toggle-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`sidebar-dashboard ${isOpen ? "sidebar-show" : ""}`}
      ref={navbarRef}
    >
      <div className="sidebar-top">
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink
                to="/admin/blogs"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdDocumentScanner size={20} />
                </span>
                <span className="menu-link-text">Blogs</span>
              </NavLink>
            </li>
            <div style={{ marginTop: 20 }}>
              <span className="menu-link-text">Contact Responses</span>
            </div>
            <li
              className="menu-item"
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NavLink
                to="/admin/contacts"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdDescription size={20} />
                </span>
                <span className="menu-link-text">All Responses</span>
              </NavLink>
            </li>
            <div style={{ marginTop: 20 }}>
              <span className="menu-link-text">Booking</span>
            </div>
            <li
              className="menu-item"
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <NavLink
                to="/admin/appointments"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdDescription size={20} />
                </span>
                <span className="menu-link-text">All Bookings</span>
              </NavLink>
              <NavLink
                to="/admin/appointmentsviewed"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdPreview size={20} />
                </span>
                <span className="menu-link-text">Viewed</span>
              </NavLink>
            </li>
            <li className="menu-item" style={{ marginTop: 10 }}>
              <NavLink
                to="/admin/service"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdDescription size={20} />
                </span>
                <span className="menu-link-text">Manage Services</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="sidebar-menu sidebar-menu2">
          <ul className="menu-list">
            <li className="menu-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdPageview size={20} />
                </span>
                <span className="menu-link-text">View Site</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/admin/profile"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdOutlineSettings size={20} />
                </span>
                <span className="menu-link-text">Settings</span>
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text" onClick={logoutHandler}>
                  Logout
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AdminSidebar;
