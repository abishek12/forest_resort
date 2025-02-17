import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";

import { listBlogs, removeBlog } from "../../../../actions/blogActions";
import Loader from "../../../../components/Loader";
import Message from "../../../../components/Message";
import { dateTimeFormat } from "../../../../utils/date-time";

const TABLE_HEADS = ["S.N", "Title", "Author", "Date", "Status", "Actions"];

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await listBlogs();
        setBlogs(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleRemoveBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        await removeBlog(id, userInfo);
        setBlogs(blogs.filter((blog) => blog._id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="blog-list">
      <h1>Blogs</h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <Link to="/admin/blog/create" className="btn">Add Blogs</Link>
      <div className="data-table-diagram">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog, index) => (
              <tr key={uuid()}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.user.fullname}</td>
                <td>{dateTimeFormat(blog.createdAt)}</td>
                <td>{blog.status}</td>
                <td className="dt-cell-action">
                  <div className="d-flex align-items-center">
                    <Link to={`/admin/blogs/${blog._id}/view`} className="me-2">
                      <FaEye />
                    </Link>
                    <Link
                      onClick={() => handleRemoveBlog(blog._id)}
                      className="me-2"
                    >
                      <MdDeleteOutline />
                    </Link>
                    <Link to="#" className="">
                      <FaEdit />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlog;
