import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import "./Baselayout.scss";
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
    if (!userInfo) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  return (
    <>
      <main className="page-wrapper">
        <button
          onClick={toggleSidebar}
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
    </>
  );
};

export default BaseLayout;
