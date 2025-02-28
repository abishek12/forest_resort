import React from "react";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import BlogWithSideBarContent from "../../components/blog/BlogWithSideBarContent";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV1 from "../../components/header/HeaderV1";

const BlogWithSideBar = () => {
  return (
    <>
      <HeaderV1 />
      <BreadCrumb breadCrumb="blog" title1="Latest Blog" bottomSpace="pb-0" />
      <BlogWithSideBarContent />
      <FooterV1 />
    </>
  );
};

export default BlogWithSideBar;
