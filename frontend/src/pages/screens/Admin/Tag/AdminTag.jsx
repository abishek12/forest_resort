import React, { useState, useEffect } from "react";
import { listTag } from "../../../../actions/tagActions";

export const AdminTag = () => {
  const [tag, setTag] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  useEffect(() => {
    const fetchTag = async () => {
      try {
        setLoading(true);
        const data = await listTag("", 1, 10, "desc");
        setTag(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchTag();
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
      <h2>Admin Tag</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        
        <div>
          <label>Title:</label>
          <input
            className="tw-w-fit"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            className="tw-w-fit"
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
          />
        </div>
        <div className="tw-space-x-10">
        <button type="submit" className="tw-bg-green-600">Add Tag</button>
        <button type="submit" className="tw-bg-green-600">Create Tag</button>
        </div>
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            {/* <th>Description</th> */}
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tag.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              {/* <td>{item.description || "N/A"}</td> */}
              <td>{item.author || "N/A"}</td>
              <td className="tw-space-x-5">
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