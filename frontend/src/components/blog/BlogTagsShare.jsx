import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import SocialShare2 from "../others/SocialShare2";

const BlogTagsShare = ({ blogInfo }) => {
  if (!blogInfo) {
    return <div>Loading...</div>;
  }
  const { tags } = blogInfo;
  return (
    <>
      <div className="post-tags share">
        <div className="tags">
          <h4>Tag: </h4>
          {tags.map((item) => (
            <p>{item.title}</p>
          ))}
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
