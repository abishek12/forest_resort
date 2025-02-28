import React, { useEffect, useState } from "react";

import SearchWidget from "../widgets/SearchWidget";
import CategoryDataListWidget from "../widgets/CategoryDataListWidget";
import SocialWidget from "../widgets/SocialWidget";
import { Breadcrumb } from "../widgets/Breadcrumb";

import { Link } from "react-router-dom";
import { listBlogs } from "../../actions/blogActions";
import { toast } from "react-toastify";
import { dateTimeFormat } from "../../utils/date-time";

const MyBlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [blogsPerPage] = useState(10);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const data = await listBlogs("", 1, 10, "desc", search);
      setBlogs(data);
    } catch (error) {
      toast.error("Error fetching offers");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container tw-pt-20 ">
        <Breadcrumb page="Blogs" />
        <div className="tw-flex tw-justify-between tw-items-center tw-bg-[#D2EDD6]">
          <h3 className="tw-font-bold tw-text-3xl">Latest Blog</h3>
          <div className="mt-md-10 mt-xs-5 pb-3">
            <aside>
              <SearchWidget setSearch={setSearch} />
            </aside>
          </div>
        </div>

        <div className="tw-grid grid-cols-12 gap-6 tw-h-full tw-w-full tw-bg-white tw-px-2 tw-py-2">
          <div className="row px-4">
            <div className="col-4 col-md-3 col-lg-3 mt-4">
              <div className="category-list tw-shadow tw-p-4">
                <CategoryDataListWidget />
              </div>
              <div className="social-media tw-shadow tw-p-4 mt-4">
                <SocialWidget />
              </div>
            </div>

            <div name="blog" className="col-8 col-md-9 col-lg-9 pt-2 bt-2">
              <div className="row row-cols-2">
                {blogs.map((item, index) => (
                  <div className="tw-rounded-lg tw-bg-white" key={index}>
                    <div className="tw-p-6" key={index}>
                      <img
                        src={item.featured_image}
                        alt="Futsal"
                        width="439"
                        height="274"
                        top="298"
                        Left="465"
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        {item.title}
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          {dateTimeFormat(item.createdAt)}
                        </p>
                        <svg
                          width="25%"
                          height="2"
                          border="2px"
                          className="absolute bottom-0 left-0"
                        >
                          <line
                            x2="100%"
                            y2="100%"
                            stroke="#1A7218F2"
                            strokeWidth="5"
                          />
                        </svg>
                      </div>
                      <p className="tw-mb-4 tw-text-black">
                        {item.content}
                      </p>
                      <Link
                        href="#"
                        className="d-flex align-items-center text-[#1A7218F2] hover:underline"
                      >
                        Read More
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="ms-1"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h10.793L8.146 3.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 1 1-.708-.708L12.293 8.5H1.5A.5.5 0 0 1 1 8z"
                          />
                        </svg>
                      </Link>
                      {/* </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-justify-center">
          <p
            className="app tw-flex tw-justify-center tw-font-semibold tw-text-[#FFFFFF] tw-py-3 tw-rounded-full mt-5 tw-w-[204px]"
            style={{
              background: "linear-gradient(to right, #1A7218, #B5DE4C)",
            }}
          >
            Forest Arena App
          </p>
        </div>
      </div>
    </>
  );
};
export default MyBlogContent;
