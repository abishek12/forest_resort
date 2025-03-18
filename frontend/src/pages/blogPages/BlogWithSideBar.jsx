import React from "react";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
// import BlogWithSideBarContent from "../../components/blog/BlogWithSideBarContent";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";
import MyBlogContent from "../../components/blog/MyBlogContent";

const BlogWithSideBar = () => {
  return (
    <>
      <HeaderV1 />
      
      {/* <BlogWithSideBarContent /> */}
      <MyBlogContent/>

      <FooterV1 />
      
    </>
    
  );
};

export default BlogWithSideBar;
