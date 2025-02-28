import { useState } from "react";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import AdminSidebar from "../components/AdminSidebar/AdminSidebar";
import "./Baselayout.scss";

const BaseLayout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
