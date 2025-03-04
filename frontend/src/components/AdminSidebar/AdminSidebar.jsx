import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LIGHT_THEME } from "../../constants/themeConstants";
import {
  MdOutlineClose,
  MdOutlineLogout,
  MdOutlinePeople,
  MdPageview,
  MdOutlineSettings,
  MdTag,
  MdOutlineCategory,
  MdOutlineGames,
} from "react-icons/md";
import { IoHomeOutline, IoTicketOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { TbLogs } from "react-icons/tb";
import { BiMessageRoundedDots } from "react-icons/bi";
import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";
import { logout } from "../../actions/authentication/userLogout";
import { useDispatch } from "react-redux";

const AdminSidebar = ({ isOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const { theme } = useContext(ThemeContext);
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);

  // Retrieve user role from localStorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userRole = userInfo?.role;

  // Check if user is an admin
  const isAdmin = userRole?.admin === true;

  // Check if user is a subscriber
  const isSubscriber = userRole?.subscriber === true;

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
            {/* Posts Section */}
            {isAdmin && (
              <>
                <div style={{ marginTop: 20 }}>
                  <span className="menu-link-text">Dashboard</span>
                </div>
                <li className="menu-item">
                  <NavLink
                    to="/user/dashboard"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <IoHomeOutline size={20} />
                    </span>
                    <span className="menu-link-text">Home</span>
                  </NavLink>
                </li>
                <div style={{ marginTop: 20 }}>
                  <span className="menu-link-text">Posts</span>
                </div>
                <li className="menu-item">
                  <NavLink
                    to="/user/blogs"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <TbLogs size={20} />
                    </span>
                    <span className="menu-link-text">Blogs</span>
                  </NavLink>
                  <NavLink
                    to="/user/category"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <MdOutlineCategory size={20} />
                    </span>
                    <span className="menu-link-text">Categories</span>
                  </NavLink>
                  <NavLink
                    to="/user/tag"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <MdTag size={20} />
                    </span>
                    <span className="menu-link-text">Tags</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Users Section (Admin Only) */}
            {isAdmin && (
              <>
                <div style={{ marginTop: 20 }}>
                  <span className="menu-link-text">Users</span>
                </div>
                <li className="menu-item">
                  <NavLink
                    to="/user/users"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <MdOutlinePeople size={20} />
                    </span>
                    <span className="menu-link-text">Users</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Contact Responses Section (Admin Only) */}
            {isAdmin && (
              <>
                <div style={{ marginTop: 20 }}>
                  <span className="menu-link-text">Contact Responses</span>
                </div>
                <li className="menu-item">
                  <NavLink
                    to="/user/contacts"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <BiMessageRoundedDots size={20} />
                    </span>
                    <span className="menu-link-text">All Responses</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Booking Section (user Only) */}
            {isAdmin && (
              <>
                <div style={{ marginTop: 20 }}>
                  <span className="menu-link-text">Booking</span>
                </div>
                <li className="menu-item">
                  <NavLink
                    to="/user/appointments"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <IoTicketOutline size={20} />
                    </span>
                    <span className="menu-link-text">All Bookings</span>
                  </NavLink>
                  <NavLink
                    to="/user/service"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <MdOutlineGames size={20} />
                    </span>
                    <span className="menu-link-text">Services</span>
                  </NavLink>
                  <NavLink
                    to="/user/offers"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <BiSolidOffer size={20} />
                    </span>
                    <span className="menu-link-text">Offers</span>
                  </NavLink>
                </li>
              </>
            )}

            {/* Subscriber Section */}
            {/* {isSubscriber && (
              <>
                <div style={{ marginTop: 20 }}>
                  <span className="menu-link-text">Subscriber Menu</span>
                </div>
                <li className="menu-item">
                  <NavLink
                    to="/subscriber/dashboard"
                    className={({ isActive }) =>
                      isActive ? "menu-link active" : "menu-link"
                    }
                  >
                    <span className="menu-link-icon">
                      <MdPageview size={20} />
                    </span>
                    <span className="menu-link-text">Dashboard</span>
                  </NavLink>
                </li>
              </>
            )} */}
          </ul>
        </div>

        {/* Common Menu Items (Visible to All Roles) */}
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
                to="/user/profile"
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
