import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { dateTimeFormat } from "../../utils/date-time";
import ImageGrid from "./ImageGrid";

const SingleBlogSideBar = ({ blog }) => {
  const {
    _id,
    featured_image: images,
    title,
    user,
    category,
    createdAt,
    description,
  } = blog;

  const date = dateTimeFormat(createdAt);

  return (
    <>
      <Link to={`/blog-single/${_id}`} className="tw-font-medium">
        <div className="blog-style-one item">
          <div className="thumb blog-img-background">
            {/* <ImageGrid images={images} /> */}
          </div>
          <div className="info">
            <div className="meta md:tw-flex tw-gap-7">
              <span className="tw-bg-[#409d40] tw-text-white tw-px-2 tw-rounded-md">
                {category.title}
              </span>
              <span className="tw-bg-[#fdc207] tw-text-black tw-px-2 tw-rounded-md">
                By {user.fullname}
              </span>
              <span>{date}</span>
            </div>
            <h2>
              <Link to={`/blog-single/${_id}`} className="tw-line-clamp-2">
                {title}
              </Link>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: description.replace(/<img[^>]*>/g, " "),
              }}
              className="tw-line-clamp-4"
            />
          </div>
        </div>
      </Link>
    </>
  );
};

export default SingleBlogSideBar;
