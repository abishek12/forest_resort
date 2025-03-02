import React, { useEffect, useState } from "react";
import SearchWidget from "../widgets/SearchWidget";
import CategoryDataListWidget from "../widgets/CategoryDataListWidget";
import SocialWidget from "../widgets/SocialWidget";
import { Breadcrumb } from "../widgets/Breadcrumb";
import { Link } from "react-router-dom";
import { listBlogs } from "../../actions/blogActions";
import { toast } from "react-toastify";
import { dateTimeFormat } from "../../utils/date-time";
import "../../assets/css/SearchWidget.css";

const MyBlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await listBlogs("", 1, 10, "desc", search);
      setBlogs(data);
    } catch (error) {
      toast.error("Error fetching blogs");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container tw-pt-20">
      <Breadcrumb page="Blogs" />
      <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center tw-bg-[#D2EDD6] tw-p-4">
        <h3 className="tw-font-bold tw-text-2xl md:tw-text-3xl tw-mb-4 md:tw-mb-0">
          Latest Blog
        </h3>
        <div className="tw-w-full md:tw-w-auto">
          <SearchWidget setSearch={setSearch} />
        </div>
      </div>

      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-12 tw-gap-6 tw-bg-white tw-p-4">
        <div className="md:tw-col-span-3 tw-mb-6 md:tw-mb-0">
          <div className="tw-shadow tw-p-4 tw-mb-4">
            <CategoryDataListWidget />
          </div>
          <div className="tw-shadow tw-p-4">
            <SocialWidget />
          </div>
        </div>

        <div className="md:tw-col-span-9">
          <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
            {blogs.map((item, index) => (
              <div
                className="tw-rounded-lg tw-bg-white tw-shadow-md tw-overflow-hidden"
                key={index}
              >
                <div className="tw-p-4">
                  <img
                    src={item.featured_image}
                    alt="Blog"
                    className="tw-w-full tw-h-48 sm:tw-h-56 lg:tw-h-64 tw-object-cover"
                  />
                  <h3 className="tw-mt-4 tw-text-xl tw-font-bold">
                    {item.title}
                  </h3>
                  <div className="tw-relative tw-mb-4">
                    <p className="tw-text-sm tw-text-black tw-font-bold">
                      {dateTimeFormat(item.createdAt)}
                    </p>
                    <svg
                      width="100%"
                      height="2"
                      className="tw-absolute tw-bottom-0 tw-left-0"
                    >
                      <line
                        x2="100%"
                        y2="100%"
                        stroke="#1A7218F2"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <p className="tw-text-black tw-line-clamp-3">
                    {item.content}
                  </p>
                  <Link
                    to={`/blog/${item.slug}`} // Update with your blog detail route
                    className="tw-flex tw-items-center tw-text-[#1A7218F2] tw-mt-4 hover:tw-underline"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="tw-ml-1"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h10.793L8.146 3.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tw-flex tw-justify-center tw-mt-8">
        <p
          className="tw-font-semibold tw-text-white tw-py-3 tw-rounded-full tw-w-[204px] tw-text-center"
          style={{
            background: "linear-gradient(to right, #1A7218, #B5DE4C)",
          }}
        >
          Forest Arena App
        </p>
      </div>
    </div>
  );
};

export default MyBlogContent;