import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

import { listBlogs, removeBlog } from "../../../../actions/blogActions";
import Loader from "../../../../components/Loader";
import Message from "../../../../components/Message";
import { dateTimeFormat } from "../../../../utils/date-time";
import { toast } from "react-toastify";

const TABLE_HEADS = ["S.N", "Title", "Author", "Date", "Status", "Actions"];
const PAGE_SIZE = 10;

const AdminBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async (currentPage = 1) => {
    try {
      setLoading(true);
      const data = await listBlogs("", currentPage, PAGE_SIZE, "desc");
      setBlogs(data.items);
      console.log(data)
      setTotalPages(Math.ceil(data.pagination.totalRecords / PAGE_SIZE)); 
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const handleRemoveBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        setLoading(true);
        await removeBlog(id);
        toast("Deleted Successfully");
        fetchBlogs(page); // Refresh list after delete
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="blog-list">
      <h1>Blogs</h1>
      {loading && <Loader />}
      {error && <Message variant="danger">{error}</Message>}

      <Link to="/user/blog/create" className="btn mb-3">
        Add Blogs
      </Link>
      <div className="data-table-diagram">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog, index) => (
              <tr key={uuid()}>
                <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.user == null ? "N/A" : blog.user.fullname}</td>
                <td>{dateTimeFormat(blog.createdAt)}</td>
                <td>{blog.status}</td>
                <td className="dt-cell-action">
                  <div className="d-flex align-items-center">
                    <Link to={`/blog-single/${blog._id}`} className="me-2">
                      <FaEye />
                    </Link>
                    <Link
                      onClick={() => handleRemoveBlog(blog._id)}
                      className="me-2"
                    >
                      <MdDeleteOutline />
                    </Link>
                    <Link to={`/user/blog/${blog._id}/edit`} className="me-2">
                      <FaEdit />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="pagination d-flex justify-content-center mt-3">
          <button
            className="btn btn-sm btn-outline-secondary me-2"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Prev
          </button>
          <span className="align-self-center">
            Page {page} of {totalPages}
          </span>
          <button
            className="btn btn-sm btn-outline-secondary ms-2"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminBlog;
