import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { listBlogs, removeBlog } from "../../../../actions/blogActions";
import Loader from "../../../../components/Loader";
import Message from "../../../../components/Message";

const TABLE_HEADS = ["S.N", "Title", "Author", "Date", "Status", "Actions"];

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  console.log(blogs);

  // Fetch all blogs on mount
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

  // Handle blog deletion
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

      <div className="data-table-info">
        <h4 className="data-table-title">Blog Responses</h4>
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
            {blogs?.map((blog, index) => (
              <tr key={uuid()}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                {/* You can add more data columns as needed */}
                <td>{blog.author}</td>
                <td>{blog.date}</td>
                <td>{blog.status}</td>
                <td className="dt-cell-action">
                  <Link to={`/admin/blogs/${blog._id}/view`}>View</Link>
                  <Link onClick={() => handleRemoveBlog(blog._id)}>Delete</Link>
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
