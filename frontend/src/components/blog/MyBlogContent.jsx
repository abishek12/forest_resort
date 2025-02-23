import React, { useEffect, useState } from "react";
import SingleBlogSideBar from "./SingleBlogSideBar";
import Pagination from "../others/Pagination";
import SearchWidget from "../widgets/SearchWidget";
import RecentPostWidget from "../widgets/RecentPostWidget";
import CategoryDataListWidget from "../widgets/CategoryDataListWidget";
import SocialWidget from "../widgets/SocialWidget";
import { listBlogs } from "../../actions/blogActions";
import { motion } from "framer-motion";
import { fadeInAnimationVariantsContent } from "../../utils/fadeInAnimation";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";

const MyBlogContent = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentBlogs, setCurrentBlogs] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [blogsPerPage] = useState(10);

  //  useEffect(() => {
  //     const fetchBlogs = async () => {
  //       try {
  //         const fetchedBlogs = await listBlogs(search, currentPage, blogsPerPage);
  //         setBlogs(fetchedBlogs);
  //       } catch (error) {
  //         console.error("Error fetching blogs:", error);
  //       }
  //     };
  //     fetchBlogs();
  // }, [search, currentPage, blogsPerPage]);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // useEffect(() => {
  //     const filtered = blogs.filter((blog) =>
  //       blog.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setFilteredBlogs(filtered);
  //     setCurrentBlogs(filtered.slice(0, blogsPerPage));
  //   }, [blogs, search, blogsPerPage]);

  // const [paginate] = (pageNumber) => setCurrentPage(pageNumber);

  //    const blogData = [
  //     {
  //       title: "Futsal: The Fast-Paced Sport That Enhances Skills & Fitness",
  //       imageUrl: "https://placehold.co/600x400",
  //       date: "February 17, 2025",
  //       description: "Futsal is not just another version of football—it's a game that demands quick thinking, agility, and precise ball control. The smaller court size forces players to make faster decisions and develop superior dribbling, passing and...",
  //       link: "#"
  //     },
  // ];

  return (
    <>
      <div className="container tw-pt-20 ">
        <div className="tw-text-[#D2EDD6] text-sm mb-4 tw-pt-20 flex items-center space-x-2">
          <span className="tw-font-semibold text-black tw-flex items-center">
            <MdHome className="tw-text-3xl tw-translate-y-3 -tw-translate-x-6" />
            <a href="/home" className="ml-1 tw-font-semibold tw-px-2 -tw-translate-x-5 tw-translate-y-4">
              Home
            </a>
            <span className="text-black">
            <BiSolidRightArrow className="tw-translate-y-6 -tw-translate-x-6" />
            <a
              href="/blogs"
              className="tw-font-semibold tw-text-[#1A7218F2] tw-px-"
            >
              Blogs
            </a>
          </span>
          </span>
          
          <svg width="100%" height="2" border="2px" className="absolute mt-4">
            <line x2="100%" y2="100%" stroke="#000000" strokeWidth="5" />
          </svg>
        </div>

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
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal"
                        width="439"
                        height="274"
                        top="298"
                        Left="465"
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal"
                        width="439"
                        height="274"
                        top="298"
                        Left="465"
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white tw-shadow-sm">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal Post"
                        width={439}
                        height={274}
                        Top={398}
                        Left={465}
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white tw-shadow-sm">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal Post"
                        width={439}
                        height={274}
                        Top={398}
                        Left={465}
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white tw-shadow-sm">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal Post"
                        width={439}
                        height={274}
                        Top={398}
                        Left={465}
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white tw-shadow-sm">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal Post"
                        width={439}
                        height={274}
                        Top={398}
                        Left={465}
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white tw-shadow-sm">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal Post"
                        width={439}
                        height={274}
                        Top={398}
                        Left={465}
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
                <div className="col">
                  <div className="tw-rounded-lg tw-bg-white tw-shadow-sm">
                    <div className="tw-p-6">
                      <img
                        src="https://placehold.co/600x400"
                        alt="Futsal Post"
                        width={439}
                        height={274}
                        Top={398}
                        Left={465}
                        className="tw-w-[439px] tw-h-[274px] tw-object-cover"
                      />
                      {/* <div className="tw-w-[380px] tw-h-[240px] tw-top-[648px] tw-left-[465px] "> */}
                      <h3 className="tw-mb-2 tw-text-xl tw-font-bold">
                        Futsal: The Fast-Paced Sport That Enhances Skills &
                        Fitness
                      </h3>
                      <div className="relative mb-2">
                        <p className="mb-1 text-sm text-black tw-font-bold">
                          February 17, 2025
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
                      <p className="tw-mb-2 tw-text-sm tw-text-gray-500"> </p>
                      <p className="tw-mb-4 tw-text-black">
                        Futsal is not just another version of football—it's a
                        game that demands quick thinking, agility, and precise
                        ball control. The smaller court size forces players to
                        make faster decisions and develop superior dribbling,
                        passing and...
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyBlogContent;
