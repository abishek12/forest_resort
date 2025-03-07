import React, { useEffect, useState, lazy } from "react";
import { SingleBlog3d } from "./SingleBlog3d";
import { motion } from "framer-motion";
import BoxReveal from "../ui/magic_ui/box-reveal";
import { fadeInCards } from "../../utils/fadeInAnimation";

import { listHomeBlogs } from "../../actions/blogActions";

const staticBlog = [
  {
    id: "0",
    img: "/img/fsa_image/futsal.webp",
    author: "Prakash Poudel",
    date: "25 April, 2024",
    title: "⚽ Experience the Thrill of an Exciting Futsal Match Together! 🏅",
  },
  {
    id: "1",
    img: "/img/fsa_image/offer1.png",
    author: "Prakash Poudel",
    date: "25 April, 2024",
    title:
      "Enjoy our exclusive summer offers and make the most of your time! 🌳",
  },
  {
    id: "2",
    img: "/img/fsa_image/futsal.webp",
    author: "Prakash Poudel",
    date: "25 April, 2024",
    title: "⚽ Experience the Thrill of an Exciting Futsal Match Together! 🏅",
  },
];

const BlogV1 = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const items = await listHomeBlogs();
        setData(items);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  console.log('home',data)

  return (
    <>
      <div className="blog-area home-blog default-padding bottom-less">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="site-heading">
                <h5 className="sub-title">
                  <BoxReveal>News & Events</BoxReveal>
                </h5>
                <div className="common-header text-left">
                  Check Out Our Blog Posts
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6 tw-justify-center">
            {data.map((item, index) => (
              <motion.div
                variants={fadeInCards}
                initial="initial"
                whileInView="animate"
                key={index}
                className="tw-w-full tw-flex tw-justify-center"
              >
                <SingleBlog3d
                  image={item.featured_image} 
                  author={item.user.fullname}
                  date={item.createdAt} 
                  title={item.title} 
                  id={item._id} 
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
