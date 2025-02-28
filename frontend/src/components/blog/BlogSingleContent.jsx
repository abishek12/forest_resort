import React from "react";
import BlogForm from "./BlogForm";
import BlogComment from "./BlogComment";
import BlogPostPagination from "./BlogPostPagination";
import BlogTagsShare from "./BlogTagsShare";
import BlogPostAuthor from "./BlogPostAuthor";
import BlogPostContent from "./BlogPostContent";
import ReactWOW from "react-wow";

const BlogSingleContent = ({ blogInfo }) => {
  return (
    <>
      <div className="blog-area single full-blog full-blog tw-pt-10">
        <div className="container">
          <div className="blog-items">
            <div className="row">
              <ReactWOW animation="fadeInUp">
                <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                  <BlogPostContent blogInfo={blogInfo} />
                  {/* <BlogPostAuthor /> */}
                  <BlogTagsShare blogInfo={blogInfo} />
                  {/* <BlogPostPagination /> */}
                  {/* <div className="blog-comments">
                                        <div className="comments-area">
                                            <BlogComment blogInfo={blogInfo} />
                                            <BlogForm />
                                        </div>
                                    </div> */}
                </div>
              </ReactWOW>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingleContent;
