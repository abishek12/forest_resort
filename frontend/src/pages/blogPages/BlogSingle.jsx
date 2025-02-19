import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import HeaderV5 from "../../components/header/HeaderV5";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import BlogSingleContent from "../../components/blog/BlogSingleContent";
import FooterV1 from "../../components/footer/FooterV1";
import { listBlogInfo } from "../../actions/blogActions";

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogInfo = async () => {
      try {
        const response = await listBlogInfo(id);
        setBlog(response.item);
      } catch (err) {
        setError("Failed to fetch blog data");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogInfo();
  }, [id]);

  return (
    <>
      <HeaderV5 />
      <BreadCrumb
        breadCrumb="blog"
        title1={blog ? blog.title : "Loading..."}
        bottomSpace="pb-0"
        offsetClass="offset-lg-1"
      />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BlogSingleContent blogInfo={blog} />
      )}
      <FooterV1 />
    </>
  );
};

export default BlogSingle;
