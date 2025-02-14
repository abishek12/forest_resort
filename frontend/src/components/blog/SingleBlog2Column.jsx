import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBlog2Column = ({ blog }) => {
  const { id, thumb, author, date, title, icon, btnText, postLink } = blog;

  return (
    <>
      <div className="blog-style-one">
        <div className="thumb">
          <Link to={`/${postLink}/${id}#`}>
            <img
              loading="lazy"
              src={`/img/blog/${thumb}`}
              alt="Image Not Found"
            />
          </Link>
        </div>
        <div className="info">
          <div className="meta">
            <ul>
              <li>
                <Link to="#">{author}</Link>
              </li>
              <li>{date}</li>
            </ul>
          </div>
          <h2 className="post-title">
            <Link to={`/${postLink}/${id}#`}>{title}</Link>
          </h2>
          <Link to={`/${postLink}/${id}#`} className="button-regular">
            {btnText} <i className={icon}></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlog2Column;
