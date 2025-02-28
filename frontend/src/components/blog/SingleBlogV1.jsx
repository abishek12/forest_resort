import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CardBody, CardContainer, CardItem } from "../ui/aceternity_ui/3dcard";

const SingleBlogV1 = ({ blog }) => {
  const { id, thumb, tag, author, date, title, postLink, btnText, btnIcon } =
    blog;

  return (
    <CardContainer>
      <CardBody className="blog-style-one">
        <CardItem className="relative">
          <div className="thumb">
            <Link to={`/${postLink}/${id}#`}>
              <img
                loading="lazy"
                src={`/img/blog/${thumb}`}
                alt="Image Not Found"
              />
            </Link>
          </div>
          <div className="tags">
            <Link to={void 0}>{tag}</Link>
          </div>
        </CardItem>
        <CardItem className="info">
          <div className="meta">
            <ul>
              <li>
                <Link to={void 0}>{author}</Link>
              </li>
              <li>{date}</li>
            </ul>
          </div>
          <CardItem as="h3" translateZ={50} className="post-title">
            <Link to={`/${postLink}/${id}#`}>{title}</Link>
          </CardItem>
          <Link to={`/${postLink}/${id}#`} className="button-regular">
            {btnText} <i className={btnIcon}></i>
          </Link>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default SingleBlogV1;
