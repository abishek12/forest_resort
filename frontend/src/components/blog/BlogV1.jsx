import React from "react";
import BlogV1Data from "../../jsonData/BlogV1Data.json";
import SingleBlogV1 from "./SingleBlogV1";
import { SingleBlog3d } from "./SingleBlog3d";
import { motion } from "framer-motion";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { fadeInCards } from "../../utils/fadeInAnimation";
import { Highlight } from "../ui/aceternity_ui/text-highlight";
import { useSelector } from "react-redux";

const BlogV1 = () => {
  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const sortedBlogs = blogs
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <div className="blog-area home-blog default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">
                  <BoxReveal>News & Events</BoxReveal>
                </h5>
                <h3 class="tw-text-2xl md:tw-text-5xl">
                  <Highlight>Read Our Latest Posts</Highlight>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {sortedBlogs.slice(0, 3).map((blog) => (
              <motion.div
                variants={fadeInCards}
                initial="initial"
                whileInView="animate"
                custom={blog._id}
                className="col-xl-4 col-md-6 mb-30"
                key={blog._id}
              >
                {/* <SingleBlogV1 blog={blog} /> */}
                <SingleBlog3d blog={blog} />
              </motion.div>
            ))}
            {(!sortedBlogs || sortedBlogs.length === 0) && (
              <div className="tw-text-center tw-text-gray-500 tw-text-lg tw-p-4 tw-border tw-border-dashed tw-border-gray-300 tw-rounded-md">
                No blogs available at the moment...
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1;
