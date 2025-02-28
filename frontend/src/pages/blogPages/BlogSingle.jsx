import React, { useEffect } from "react";
import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import BlogSingleContent from "../../components/blog/BlogSingleContent";
import FooterV1 from "../../components/footer/FooterV1";
import { useParams } from "react-router-dom";
import BlogV1Data from "../../jsonData/BlogV1Data.json";
import { useDispatch, useSelector } from "react-redux";
import { listBlogInfo } from "../../actions/blogActions";

const BlogSingle = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const blogDetails = useSelector((state) => state.blogDetails);
  const { blog } = blogDetails;

  useEffect(() => {
    dispatch(listBlogInfo(id));
  }, [dispatch]);

  return (
    <>
      <HeaderV5 />
      <BreadCrumb
        breadCrumb="blog"
        title1={blog?.title}
        bottomSpace="pb-0"
        offsetClass="offset-lg-1"
      />
      <BlogSingleContent blogInfo={blog} />
      <FooterV1 />
    </>
  );
};

export default BlogSingle;
