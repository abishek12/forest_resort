import React, { useEffect, useState } from "react";
import SingleBlogSideBar from "./SingleBlogSideBar";
import Pagination from "../others/Pagination";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostWidget from "../widgets/RecentPostWidget";
import CategoryDataListWidget from "../widgets/CategoryDataListWidget";
import SocialWidget from "../widgets/SocialWidget";
import { listBlogs } from "../../actions/blogActions";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsContent } from "../../utils/fadeInAnimation";

const BlogWithSideBarContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(10); 
  const [search, setSearch] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const fetchedBlogs = await listBlogs(search, currentPage, blogsPerPage);
        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [search, currentPage, blogsPerPage]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const filtered = blogs.filter((blog) => 
      blog.title.toLowerCase().includes(search.toLowerCase()) 
    );
    setFilteredBlogs(filtered);
    setCurrentBlogs(filtered.slice(0, blogsPerPage));
  }, [blogs, search, blogsPerPage]);

  return (
    <>
      <div className="blog-area full-blog default-padding">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                <div className="blog-item-box">
                  {currentBlogs.map((blog) => (
                    <motion.div
                      variants={fadeInAnimationVariantsContent}
                      initial="initial"
                      whileInView="animate"
                      key={blog.id} 
                    >
                      <SingleBlogSideBar blog={blog} />
                    </motion.div>
                  ))}
                  {(!currentBlogs || currentBlogs.length === 0) && (
                    <div className="tw-text-center tw-text-gray-500 tw-text-lg tw-p-4 tw-border tw-border-dashed tw-border-gray-300 tw-rounded-md">
                      No blogs available at the moment...
                    </div>
                  )}
                </div>
                <Pagination
                  blogsPerPage={blogsPerPage}
                  totalBlogs={filteredBlogs.length}
                  paginate={paginate}
                  currentPage={currentPage}
                />
              </div>

              <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                <aside>
                  <SearchWidget setSearch={setSearch} />
                  {/* <RecentPostWidget blogs={blogs} /> */}
                  <CategoryDataListWidget />
                  <SocialWidget />
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogWithSideBarContent;