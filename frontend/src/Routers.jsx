import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRouters";

import Home1 from "./pages/homePages/Home1";
import Business from "./pages/homePages/Business";
import Home1Dark from "./pages/homePages/Home1Dark";
import Home2Dark from "./pages/homePages/Home2Dark";
import Home3Dark from "./pages/homePages/Home3Dark";
import BusinessDark from "./pages/homePages/BusinessDark";
import Services from "./pages/servicePages/Services";
import StoryMD from "./pages/mdstory/StoryMD.jsx";
import Services2 from "./pages/servicePages/Services2";
import Services3 from "./pages/servicePages/Services3";
import ServicesDetails from "./pages/servicePages/ServicesDetails";
import Project2Column from "./pages/project/Project2Column";
import Project3Column from "./pages/project/Project3Column";
import ProjectCarousel from "./pages/project/ProjectCarousel";
import ProjectDetails from "./pages/project/ProjectDetails";
import Team from "./pages/teamPages/Team";
import Team2 from "./pages/teamPages/Team2";
import Team3 from "./pages/teamPages/Team3";
import TeamDetails from "./pages/teamPages/TeamDetails";
import AboutUs from "./pages/innerPages/AboutUs";
import Pricing from "./pages/innerPages/Pricing";
import ContactUs from "./pages/innerPages/ContactUs";
import Error404 from "./pages/innerPages/Error404";
import BlogStandard from "./pages/blogPages/BlogStandard";
import BlogWithSideBar from "./pages/blogPages/BlogWithSideBar";
import Blog2Column from "./pages/blogPages/Blog2Column";
import Blog3Column from "./pages/blogPages/Blog3Column";
import BlogSingle from "./pages/blogPages/BlogSingle";
import BlogSingleSidebar from "./pages/blogPages/BlogSingleSidebar";

import LoginScreen from "./pages/screens/LoginScreen";
import ActivateAccount from "./pages/screens/ActivateAccount";

import BaseLayout from "./layout/BaseLayout";
import ProfileScreen from "./pages/screens/Admin/Profile/ProfileScreen";
// import BlogListScreen from "./pages/screens/BlogListScreen";
import BlogCreateScreen from "./pages/screens/Admin/Blog/BlogCreateScreen";
import BlogEditScreen from "./pages/screens/Admin/Blog/BlogEditScreen";
import Dashboard from "./pages/screens/Admin/Dashboard";
import AdminBlog from "./pages/screens/Admin/Blog/AdminBlog";
import AdminContact from "./pages/screens/Admin/Contact/Contact";
import { AdminCategory } from "./pages/screens/Admin/Category/Category";
import { AdminTag } from "./pages/screens/Admin/Tag/AdminTag";
import Offer from "./components/offer/Offer";

import Service from "./pages/screens/Admin/Services/Service";
import RegisterScreen from "./pages/screens/RegisterScreen";
import User from "./pages/screens/Admin/User/User";
import { AdminOffers } from "./pages/screens/Admin/Offers/AdminOffers";
import { AdminService } from "./pages/screens/Admin/Services/AdminService";
import Appointment from "./pages/screens/Admin/Appointment/Appointment";
import AppointmentViewScreen from "./pages/screens/Admin/Appointment/AppointmentViewScreen";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        {/* <Route path='/home-2' element={<Home2 />}></Route>
                <Route path='/home-3' element={<Home3 />}></Route> */}
        <Route path="/business" element={<Business />}></Route>
        <Route path="/home-1-dark" element={<Home1Dark />}></Route>
        <Route path="/home-2-dark" element={<Home2Dark />}></Route>
        <Route path="/home-3-dark" element={<Home3Dark />}></Route>
        <Route path="/business-dark" element={<BusinessDark />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/services-2" element={<Services2 />}></Route>
        <Route path="/services-3" element={<Services3 />}></Route>
        <Route path="/md-story" element={<StoryMD />}></Route>
        <Route
          path="/services-details/:id"
          element={<ServicesDetails />}
        ></Route>
        <Route
          path="/services-details"
          element={<Navigate to="/services-details/1" />}
        ></Route>
        <Route path="/project-2-column" element={<Project2Column />}></Route>
        <Route path="/project-3-column" element={<Project3Column />}></Route>
        <Route path="/project-carousel" element={<ProjectCarousel />}></Route>
        <Route path="/project-details/:id" element={<ProjectDetails />}></Route>
        <Route
          path="/project-details"
          element={<Navigate to="/project-details/1" />}
        ></Route>
        <Route path="/team" element={<Team />}></Route>
        <Route path="/team-2" element={<Team2 />}></Route>
        <Route path="/team-3" element={<Team3 />}></Route>
        <Route path="/team-details/:id" element={<TeamDetails />}></Route>
        <Route
          path="/team-details"
          element={<Navigate to="/team-details/1" />}
        />
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/offer" element={<Offer />} />
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/blog-standard" element={<BlogStandard />}></Route>
        <Route path="/blogs" element={<BlogWithSideBar />}></Route>
        <Route path="/blog-2-column" element={<Blog2Column />}></Route>
        <Route path="/blog-3-column" element={<Blog3Column />}></Route>
        <Route path="/blog-single/:id" element={<BlogSingle />}></Route>
        <Route
          path="/blog-single"
          element={<Navigate to="/blog-single/1" />}
        ></Route>
        <Route
          path="/blog-single-sidebar/:id"
          element={<BlogSingleSidebar />}
        ></Route>
        <Route
          path="/blog-single-sidebar/"
          element={<Navigate to="/blog-single-sidebar/1" />}
        ></Route>

        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/activate-account" element={<ActivateAccount />} />
        <Route element={<BaseLayout />}>
          <Route
            path="/user/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/category"
            element={
              <PrivateRoute>
                <AdminCategory />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/tag"
            element={
              <PrivateRoute>
                <AdminTag />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/users"
            element={
              <PrivateRoute>
                <User />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/profile"
            element={
              <PrivateRoute>
                <ProfileScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/blogs"
            element={
              <PrivateRoute>
                <AdminBlog />
              </PrivateRoute>
            }
            exact
          />
          {/* <Route path="/admin/blogs/:pageNumber" element={<BlogListScreen />} exact /> */}
          <Route
            path="/user/blog/create"
            element={
              <PrivateRoute>
                <BlogCreateScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/blog/:id/edit"
            element={
              <PrivateRoute>
                <BlogEditScreen />
              </PrivateRoute>
            }
          />
          <Route
            path="/user/contacts"
            element={
              <PrivateRoute>
                <AdminContact />
              </PrivateRoute>
            }
            exact
          />

          <Route
            path="/user/service"
            element={
              <PrivateRoute>
                <AdminService />
              </PrivateRoute>
            }
            exact
          />

          <Route
            path="/user/offers"
            element={
              <PrivateRoute>
                <AdminOffers />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/user/booking"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
            exact
          />
          <Route
            path="/user/booking/:id/view"
            element={
              <PrivateRoute>
                <AppointmentViewScreen />
              </PrivateRoute>
            }
            exact
          />
        </Route>

        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </>
  );
};

export default Routers;
