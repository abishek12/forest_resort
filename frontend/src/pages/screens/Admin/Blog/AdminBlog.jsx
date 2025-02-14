import React, { useEffect, useRef, useState } from "react";
// import UserAction from "./UserAction";
import "./Blog.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  listBlogs,
  removeBlog,
  createBlog,
} from "../../../../actions/blogActions";
import { BLOG_CREATE_RESET } from "../../../../constants/blogConstants";
import { Link, useNavigate } from "react-router-dom";
import { HiDotsHorizontal } from "react-icons/hi";
import { Button } from "react-bootstrap";
import { MdEditSquare, MdOutlineDelete } from "react-icons/md";
import { dateTimeFormat } from "../../../../utils/date-time";

const TABLE_HEADS = ["Published Date", "Title", "Author", "Actions"];

const AdminBlog = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const blogList = useSelector((state) => state.blogList);
  const { blogs } = blogList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const blogCreate = useSelector((state) => state.blogCreate);
  const { success: successCreate, blog: createdBlog } = blogCreate;

  const blogDelete = useSelector((state) => state.blogDelete);
  const { success: successDelete } = blogDelete;

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch({ type: BLOG_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/blogs`);
    } else {
      dispatch(listBlogs());
    }
  }, [dispatch, navigate, userInfo, successDelete, successCreate, createdBlog]);

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      setLoading(true);
      try {
        await dispatch(removeBlog(id));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("Error deleting blog. Please try again.");
      }
    }
  };

  const createBlogHandler = () => {
    navigate("/admin/blog/create");
    // dispatch(createBlog());
  };

  // const [showDropdown, setShowDropdown] = useState(false);
  // const handleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const dropdownRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setShowDropdown(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const userDelete = useSelector((state) => state.userDelete);
  // const { success: successDelete } = userDelete;

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure")) {
  //     dispatch(deleteUser(id));
  //   }
  // };

  const sortedBlogs = blogs
    ?.slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Blogs</h4>
      </div>
      <div className="button-container">
        <button
          className="cs_btn cs_style_1"
          onClick={createBlogHandler}
          disabled={loading}
        >
          <span>Add Blog</span>
          {/* <i>
            <img loading="lazy"  src="/images/icons/arrow_white.svg" alt="Icon" />
            <img loading="lazy"  src="/images/icons/arrow_white.svg" alt="Icon" />
          </i> */}
        </button>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedBlogs?.map(
              (blog) => (
                // return (
                <tr key={blog._id}>
                  <td>{dateTimeFormat(blog.createdAt)}</td>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td className="dt-cell-action">
                    <Link to={`/admin/blog/${blog._id}/edit`}>
                      <MdEditSquare style={{ color: "gray" }} />
                    </Link>
                    <Link
                      onClick={() => deleteHandler(blog._id)}
                      disabled={loading}
                    >
                      <MdOutlineDelete style={{ color: "red" }} />
                    </Link>
                    {/* <button
                    type="button"
                    className="action-dropdown-btn"
                    onClick={handleDropdown}
                  >
                    <HiDotsHorizontal size={18} />
                    {showDropdown && (
                      <div className="action-dropdown-menu" ref={dropdownRef}>
                        <ul className="dropdown-menu-list" style={{ listStyle: 'none' }}>
                          <li className="dropdown-menu-item">
                            <Link to={`/admin/blog/${blog._id}/edit`} className="dropdown-menu-link">
                              Edit
                            </Link>
                          </li>
                          <li className="dropdown-menu-item">
                            <Link className="dropdown-menu-link" onClick={() => deleteHandler(blog._id)}>
                              Delete
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </button> */}
                    {/* <UserAction id={blog._id} /> */}
                  </td>
                </tr>
              )
              // }
            )}
          </tbody>
        </table>
      </div>
      {loading && <div className="loading-overlay">Deleting...</div>}
    </section>
  );
};

export default AdminBlog;
