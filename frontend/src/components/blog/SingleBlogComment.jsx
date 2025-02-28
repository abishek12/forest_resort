import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBlogComment = ({ comment }) => {
  const { commentReplay, thumb, name, icon, date, text } = comment;

  return (
    <>
      <div className={`comment-item ${commentReplay}`}>
        <div className="avatar">
          <img loading="lazy" src={`/img/team/${thumb}`} alt="Author" />
        </div>
        <div className="content">
          <div className="title">
            <h5>
              {name}
              <span className="reply">
                <Link to="#">
                  <i className={icon}></i> Reply
                </Link>
              </span>
            </h5>
            <span>{date}</span>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default SingleBlogComment;
