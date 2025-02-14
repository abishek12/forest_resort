import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const BlogPostAuthor = () => {
  return (
    <>
      <div className="post-author">
        <div className="thumb">
          <img loading="lazy" src="/img/team/9.jpg" alt="Thumb" />
        </div>
        <div className="info">
          <h4>
            <Link to="/blogs#">Md Sohag</Link>
          </h4>
          <p>
            Grursus mal suada faci lisis Lorem ipsum dolarorit more ametion
            consectetur elit. Vesti at bulum nec at odio aea the dumm ipsumm
            ipsum that dolocons rsus mal suada and fadolorit to the consectetur
            elit. All the Lorem Ipsum generators on the Internet tend.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPostAuthor;
