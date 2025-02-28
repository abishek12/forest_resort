import React, { useState, useEffect } from "react";
import {
  listCategory,
  createCategory,
  updateCategory,
  removeCategory,
} from "../../../../actions/categoryActions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const AdminCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editCategoryId, setEditCategoryId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
  });

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
        await removeCategory(id);
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

  const handleEdit = (category) => {
    setEditCategoryId(category._id);
    setFormData({
      title: category.title,
      description: category.description || "",
      author: category.author.fullname || "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editCategoryId) {
        // Update existing category
        await updateCategory(editCategoryId, {
          title: formData.title,
          description: formData.description,
        });
        toast("Category updated successfully!");
        setEditCategoryId(null); // Reset edit mode
      } else {
        // Create new category
        await createCategory({
          ...formData,
          author: userInfo.userId,
        });
        toast("Category created successfully!");
      }

      fetchCategories(); // Refresh list
      setFormData({ title: "", description: "", author: "" });
    } catch (err) {
      toast("Failed to process category: " + err.message);
    } finally {
      setLoading(false);
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
        <button className="btn" type="submit" disabled={loading}>
          {loading
            ? "Processing..."
            : editCategoryId
            ? "Update Category"
            : "Add Category"}
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
                <button className="btn mx-2" onClick={() => handleEdit(item)}>
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item._id)}
                  disabled={loading}
                  className="btn"
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
