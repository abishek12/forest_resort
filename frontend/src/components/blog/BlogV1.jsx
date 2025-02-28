import React, { lazy } from "react";
import BlogV1Data from "../../jsonData/BlogV1Data.json";
import SingleBlogV1 from "./SingleBlogV1";
import { SingleBlog3d } from "./SingleBlog3d";
import { motion } from "framer-motion";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { fadeInCards } from "../../utils/fadeInAnimation";
import { Highlight } from "../ui/aceternity_ui/text-highlight";
import { useSelector } from "react-redux";

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
];

const BlogV1 = () => {
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
                <div className="common-header">
                  {/* Keep your header */}
                  Check Out Our Blog Posts
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tw-flex tw-justify-center tw-gap-4">
            {staticBlog.slice(0, 3).map((item, index) => (
              <motion.div
                variants={fadeInCards}
                initial="initial"
                whileInView="animate"
                key={index}
              >
                <SingleBlog3d
                  image={item.img}
                  author={item.author}
                  date={item.date}
                  title={item.title}
                  id={item.id}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogV1;
