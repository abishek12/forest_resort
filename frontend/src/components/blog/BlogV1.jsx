import React from "react";
import BlogV1Data from "../../jsonData/BlogV1Data.json";
import SingleBlogV1 from "./SingleBlogV1";
import { SingleBlog3d } from "./SingleBlog3d";
import { motion } from "framer-motion";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { fadeInCards } from "../../utils/fadeInAnimation";
import { Highlight } from "../ui/aceternity_ui/text-highlight";
import { useSelector } from "react-redux";

<<<<<<< HEAD
const staticBlog = [
  {
    id: '0',
    img: '/img/fsa_image/futsal.webp',
    author: 'Prakash Poudel',
    date: '25 April, 2024',
    title: '⚽ Experience the Thrill of an Exciting Futsal Match Together! 🏅',
  },
  {
    id: '1',
    img: '/img/fsa_image/offer1.png',
    author: 'Prakash Poudel',
    date: '25 April, 2024',
    title: 'Enjoy our exclusive summer offers and make the most of your time! 🌳',
  },
  {
    id: '2',
    img: '/img/fsa_image/futsal.webp',
    author: 'Prakash Poudel',
    date: '25 April, 2024',
    title: '⚽ Experience the Thrill of an Exciting Futsal Match Together! 🏅',
  },

]
=======
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
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
<<<<<<< HEAD
                <div class="common-header">  {/**new styles */}
                  Check Out Our Blog Posts
                </div>
=======
                <h3 class="tw-text-2xl md:tw-text-5xl">
                  <Highlight>Read Our Latest Posts</Highlight>
                </h3>
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div className="container ">
          <div className="tw-flex tw-justify-center tw-gap-4">
            {staticBlog.slice(0, 3).map((item, index) => (
=======
        <div className="container">
          <div className="row">
            {sortedBlogs.slice(0, 3).map((blog) => (
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
              <motion.div
                variants={fadeInCards}
                initial="initial"
                whileInView="animate"
<<<<<<< HEAD
                key={index}
              // className="col-xl-4 col-md-6 mb-30"

              >
                {/* <SingleBlogV1 blog={blog} /> */}
                <SingleBlog3d
                  image={item.img}
                  author={item.author}
                  date={item.date}
                  title={item.title}
                  id={item.id}
                />
              </motion.div>
            ))}
            {/* {(!sortedBlogs || sortedBlogs.length === 0) && (
              <div className="tw-text-center tw-text-gray-500 tw-text-lg tw-p-4 tw-border tw-border-dashed tw-border-gray-300 tw-rounded-md">
                No blogs available at the moment...
              </div>
            )} */}
=======
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
>>>>>>> 1b623ca2972a84a66c8d67f2e26d4e2af8aeff60
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1;
