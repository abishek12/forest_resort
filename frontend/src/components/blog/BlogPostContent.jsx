import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImageGrid2 from "./ImageGrid2";
import { dateTimeFormat } from "../../utils/date-time";

const BlogPostContent = ({ blogInfo }) => {
  if (
    !blogInfo ||
    !blogInfo.description ||
    !blogInfo.author ||
    !blogInfo.createdAt ||
    !blogInfo.images ||
    blogInfo.images.length === 0
  ) {
    return <div>Loading...</div>;
  }

  const { description, images, author, createdAt } = blogInfo;

  return (
    <>
      <div className="blog-style-one item tw-p-2 md:tw-p-12">
        <div className="blog-item-box">
          <div className="thumb">
            <ImageGrid2 images={images} />
          </div>
          <div className="info">
            <div className="meta">
              <ul>
                <li>
                  <i className="fa-solid fa-user"></i>{" "}
                  <Link to="#">{author || "Unknown Author"}</Link>
                </li>
                <li>
                  <i className="fa-solid fa-calendar-alt"></i>{" "}
                  {createdAt ? dateTimeFormat(createdAt) : "Date Not Available"}
                </li>
              </ul>
            </div>
            <div
              dangerouslySetInnerHTML={{
                __html: description || "<p>No description available.</p>",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostContent;
