import { Link } from "react-router-dom";
import Arrow from "../../assets/icons/Arrow.svg";
import { dateTimeFormat } from "../../utils/date-time";

export function SingleBlog3d({ id, image, title, date, author }) {
  return (
    <div
      className="tw-bg-yellow-400 tw-h-auto tw-w-auto tw-shadow-lg tw-border-[3px] tw-border-white tw-overflow-hidden"
      style={{ backgroundColor: "rgba(181, 222, 76, 0.12)" }}
    >
      <div className="tw-w-full tw-overflow-hidden tw-h-[310px] tw-bg-slate-700 ">
        <img
          src={image}
          className="tw-w-full tw-h-full tw-object-cover hover:tw-scale-105 tw-transition"
        />
      </div>
      <div
        className="tw-text-black tw-p-7 tw-flex tw-flex-col tw-justify-between tw-w-full tw-h-[250px]"
        style={{
          backgroundColor: "rgba(255, 255, 255, 1)",
          border: "3px",
          borderRight: "white",
          borderLeft: "white",
          borderBottom: "white",
        }}
      >
        <div>
          <p className="tw-font-bold tw-text-[15px] tw-leading-[10px] tw-tracking-[0.05em] tw-opacity-85">
            {author}
          </p>
          <p className="tw-font-semibold tw-text-[12px] tw-leading-[10px] tw-tracking-[0.05em] tw-opacity-70">
            {dateTimeFormat(date)}
          </p>
        </div>
        <div>
          <p className="tw-font-bold tw-text-[16px] tw-leading-[25px] tw-tracking-[0.02em]">
            {title}
          </p>
        </div>
        <Link to={`blog-single/${id}`}>
          <div className="tw-opacity-70 tw-flex tw-items-center tw-gap-2 tw-cursor-pointer hover:tw-text-green-700">
            <span className="tw-font-bold tw-text-[16px] tw-tracking-[0.02em]">
              Continue Reading
            </span>
            <img src={Arrow} alt="" className="tw-h-4 tw-w-4 tw-fill-current" />
          </div>
        </Link>
      </div>
    </div>
  );
}
