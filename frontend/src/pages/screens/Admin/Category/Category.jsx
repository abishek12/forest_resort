import React, { useState, useEffect } from "react";
import {
  listCategory,
  createCategory,
  removeCategory,
} from "../../../../actions/categoryActions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const AdminCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
  });

  // Get userInfo from Redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const data = await listCategory("", 1, 10, "desc");
      setCategory(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        setLoading(true);
        await removeCategory(id, userInfo);
        toast("Category deleted successfully!");
        fetchCategories();
      } catch (err) {
        toast("Failed to delete category: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // Add userId from userInfo to formData
      const updatedFormData = {
        ...formData,
        author: userInfo.userId,
      };

      // Call createCategory with updated formData
      const newCategory = await createCategory(updatedFormData);
      setLoading(false);

      // Refresh the category list
      const updatedCategories = await listCategory("", 1, 10, "desc");
      setCategory(updatedCategories);

      // Clear the form
      setFormData({ title: "", description: "", author: "" });

      // Show success message
      toast("Category created successfully!");
    } catch (err) {
      setError(err.message);
      setLoading(false);
      toast("Failed to create category: " + err.message);
    }
  };

  return (
    <>
      <h2>Admin Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows={5}
          ></textarea>
        </div>
        <div>
          <label className="form-label">Author:</label>
          <input
            type="text"
            name="author"
            value={userInfo.fullname}
            className="form-control"
            required
            readOnly
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {category.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.description || "N/A"}</td>
              <td>{item.author.fullname || "N/A"}</td>
              <td>
                <button>Edit</button>
                <button
                  onClick={() => handleDelete(item._id)}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
