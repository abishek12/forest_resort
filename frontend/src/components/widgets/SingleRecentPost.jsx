import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { dateTimeFormat } from "../../utils/date-time";

const SingleRecentPost = ({ post }) => {
  // const { id, thumb, date, title, postLink } = post
  const { _id, images, createdAt, title, postLink } = post;

  const date = dateTimeFormat(createdAt);

  return (
    <>
      <li>
        <div className="thumb tw-h-20 ">
          <div
            style={{
              backgroundImage: `url("${images[0]}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="info">
          <div className="meta-title">
            <span className="post-date">{date}</span>
          </div>
          <Link to={`/${postLink}/${_id}#`} className="tw-line-clamp-2">
            {title}
          </Link>
        </div>
      </li>
    </>
  );
};

export default SingleRecentPost;
