import React, { useEffect, useState } from "react";
import BlogWithSidebarData from "../../jsonData/BlogWithSidebarData.json";
import SingleBlogSideBar from "./SingleBlogSideBar";
import Pagination from "../others/Pagination";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostWidget from "../widgets/RecentPostWidget";
import CategoryDataListWidget from "../widgets/CategoryDataListWidget";
import GalleryWidget from "../widgets/GalleryWidget";
import ArchivesWidget from "../widgets/ArchivesWidget";
import SocialWidget from "../widgets/SocialWidget";
import TagsWidget from "../widgets/TagsWidget";
import { useDispatch, useSelector } from "react-redux";
import { listBlogs } from "../../actions/blogActions";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsContent } from "../../utils/fadeInAnimation";

const BlogWithSideBarContent = () => {
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const filteredBlogs = sortedBlogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
                    >
                      <SingleBlogSideBar
                        search={search}
                        blog={blog}
                        key={blog.id}
                      />
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
                  <RecentPostWidget blogs={blogs} />
                  <CategoryDataListWidget />
                  {/* <GalleryWidget /> */}
                  {/* <ArchivesWidget /> */}
                  <SocialWidget />
                  {/* <TagsWidget /> */}
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
