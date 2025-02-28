import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";

const MainMenu = ({ isOpen, closeMenu, toggleSubMenu, toggleMegaMenu }) => {
  // const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

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
          {/* <ul className="dropdown-menu">
                            <li><Link to="/#">Creative Agency</Link></li>
                            <li><Link to="/home-2#">Digital Agency</Link></li>
                            <li><Link to="/home-3#">Digital Marketing</Link></li>
                            <li><Link to="/business#">Consulting Business</Link></li>
                            <li className="dropdown">
                                <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Home Dark Version</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/home-1-dark#">Creative Agency</Link></li>
                                    <li><Link to="/home-2-dark#">Digital Agency</Link></li>
                                    <li><Link to="/home-3-dark#">Digital Marketing</Link></li>
                                    <li><Link to="/business-dark#">Consulting Business</Link></li>
                                </ul>
                            </li>
                        </ul> */}
          {/* </li> */}
          {/* <li className="dropdown megamenu-fw">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>MegaMenu</Link>
                        <ul className="dropdown-menu megamenu-content">
                            <li>
                                <div className="row">
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Services</h6>
                                        <div className="content" >
                                            <ul className="menu-col ">
                                                <li><Link to="/services#">Services Style One</Link></li>
                                                <li><Link to="/services-2#">Services Style Two</Link></li>
                                                <li><Link to="/services-3#">Services Style Three</Link></li>
                                                <li><Link to="/services-details#">Services Single</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Projects</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/project-2-column#">Project Two Column</Link></li>
                                                <li><Link to="/project-3-column#">Project Three Colum</Link></li>
                                                <li><Link to="/project-carousel#">Project Carousel</Link></li>
                                                <li><Link to="/project-details#">Project Details</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Team</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/team#">Team Style One</Link></li>
                                                <li><Link to="/team-2#">Team Style Two</Link></li>
                                                <li><Link to="/team-3#">Team Style Three</Link></li>
                                                <li><Link to="/team-details/1#">Team Details</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-menu col-lg-3">
                                        <h6 className="title" onClick={toggleMegaMenu}>Other Pages</h6>
                                        <div className="content">
                                            <ul className="menu-col">
                                                <li><Link to="/about-us#">About Us</Link></li>
                                                <li><Link to="/pricing#">Pricing Table</Link></li>
                                                <li><Link to="/contact-us#">Contact us</Link></li>
                                                <li><Link to="/404#">Error page</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li> */}
          {/* <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Services</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/services-details#">Marketing Strategy</Link></li>
                            <li><Link to="/services-details#">Enterprise Consulting</Link></li>
                            <li><Link to="/services-details#">Growth Tracking</Link></li>
                            <li><Link to="/services-details#">Social Media Marketing</Link></li>
                            <li><Link to="/services-details#">Keyword Research</Link></li>
                        </ul>
                    </li> */}
          {/* <li className="dropdown">
                        <Link to={void (0)} className="dropdown-toggle" onClick={toggleSubMenu}>Blog</Link>
                        <ul className="dropdown-menu">
                            <li><Link to="/blog-standard#">Blog Standard</Link></li>
                            <li><Link to="/blogs#">Blog With Sidebar</Link></li>
                            <li><Link to="/blog-2-column#">Blog Grid Two Column</Link></li>
                            <li><Link to="/blog-3-column#">Blog Grid Three Column</Link></li>
                            <li><Link to="/blog-single#">Blog Single</Link></li>
                            <li><Link to="/blog-single-sidebar#">Blog Single With Sidebar</Link></li>
                        </ul>
                    </li> */}
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
          {userInfo && userInfo.isAdmin && (
            <Link to="/admin/dashboard">Dashboard</Link>
          )}
        </div>
      </div>
    </>
  );
};

export default MainMenu;
