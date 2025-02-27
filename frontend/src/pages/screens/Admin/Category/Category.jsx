import React, { useState, useEffect } from "react";
import { listCategory } from "../../../../actions/categoryActions";

export const AdminCategory = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    author: "",
  });

  useEffect(() => {
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
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({ title: "", description: "", author: "" });
  };

  return (
    <>
      <h2>Admin Category</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Category</button>
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
              <td>{item.author || "N/A"}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};