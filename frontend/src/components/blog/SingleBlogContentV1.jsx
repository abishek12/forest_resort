import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBlogContentV1 = ({ blog }) => {
  const {
    id,
    thumb,
    author,
    date,
    title,
    text,
    blogPostLink,
    btnText,
    btnIcon,
  } = blog;

  return (
    <>
      <div className="blog-style-one item">
        <div className="thumb">
          <Link to={`/${blogPostLink}/${id}#`}>
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
          <h2>
            <Link to={`/${blogPostLink}/${id}#`}>{title}</Link>
          </h2>
          <p>{text}</p>
          <Link to={`/${blogPostLink}/${id}#`} className="button-regular">
            {btnText} <i className={btnIcon}></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingleBlogContentV1;
