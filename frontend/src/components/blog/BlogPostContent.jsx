import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import ImageGrid2 from "./ImageGrid2";
import { dateTimeFormat } from "../../utils/date-time";

const BlogPostContent = ({ blogInfo }) => {
  const { description, content, featured_image, user, createdAt, tags } =
    blogInfo;

  return (
    <>
      <div className="blog-style-one item tw-p-2 md:tw-p-12">
        <div className="blog-item-box">
          {/* <div className="thumb">
            <ImageGrid2 images={images} />
          </div> */}
          <div className="info">
            <div className="meta">
              <ul>
                <li>
                  <i className="fa-solid fa-user"></i>{" "}
                  <Link to="#">{user.fullname || "Unknown Author"}</Link>
                </li>
                <li>
                  <i className="fa-solid fa-calendar-alt"></i>{" "}
                  {createdAt ? dateTimeFormat(createdAt) : "Date Not Available"}
                </li>
              </ul>
              {tags.map((tag, index) => (
                <p className="badge text-bg-success me-2">{tag.title}</p>
              ))}
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
