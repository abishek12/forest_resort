import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare2 from "../others/SocialShare2";

const BlogTagsShare = ({ blogInfo }) => {
  if (!blogInfo) {
    return <div>Loading...</div>;
  }
  const { category } = blogInfo;
  return (
    <>
      <div className="post-tags share">
        <div className="tags">
          <h4>Tag: </h4>
          <Link to={"/blogs"}>{category}</Link>
        </div>
        <div className="social">
          <h4>Share:</h4>
          <ul>
            <SocialShare2 />
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogTagsShare;
