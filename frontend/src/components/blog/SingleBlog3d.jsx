import { CardBody, CardContainer, CardItem } from "../ui/aceternity_ui/3dcard";
import { HashLink as Link } from "react-router-hash-link";
import ImageGrid from "./ImageGrid";
import { dateTimeFormat } from "../../utils/date-time";
import { FaArrowRight } from "react-icons/fa";

export function SingleBlog3d({ blog }) {
  const { _id, images, category, author, createdAt, title } = blog;
  return (
    <CardContainer className="pb-2 tw-rounded-md tw-bg-[#def7f7] tw-bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      <CardBody className="relative">
        <CardItem translateZ="100">
          {/* <img
            loading="lazy"
            src={`/img/blog/${thumb}`}
            className="tw-rounded-t-lg"
            alt="thumbnail"
          /> */}
          <ImageGrid images={images} />
          <div className="tags">
            <Link to={void 0}>{category}</Link>
          </div>
        </CardItem>
        <div className="tw-px-2 tw-pt-4">
          <CardItem translateZ="80">
            <ul>
              <li>
                <Link to={void 0}>{author}</Link>
              </li>
              <li>{dateTimeFormat(createdAt)}</li>
            </ul>
          </CardItem>
          <CardItem as="h3" translateZ="60" className="post-title">
            <Link to={`/blog-single/${_id}`}>{title}</Link>
          </CardItem>
          <CardItem
            translateZ="60"
            as={Link}
            to={`/blog-single/${_id}#`}
            target="__blank"
            className="text-neutral-500 text-sm max-w-sm post-title tw-flex tw-items-center tw-gap-2"
          >
            Continue Reading <FaArrowRight />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
