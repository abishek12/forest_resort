import React, { useState, useEffect } from "react";
import { listTags, removeTag, createTag, updateTag } from "../../../../actions/tagActions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const AdminTag = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editTagId, setEditTagId] = useState(null); 

  const [formData, setFormData] = useState({
    title: "",
    author: "",
  });

  // Get userInfo from Redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      setLoading(true);
      const data = await listTags("", 1, 10, "desc");
      setTags(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this tag?")) {
      try {
        setLoading(true);
        await removeTag(id);
        toast("Tag deleted successfully!");
        fetchTags();
      } catch (err) {
        toast("Failed to delete tag: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = (tag) => {
    setEditTagId(tag._id); // Set edit mode
    setFormData({
      title: tag.title,
      author: tag.author.fullname || "N/A", // Pre-fill the form
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.title.trim()) {
      toast("Title is required!");
      return;
    }
  
    setLoading(true);
    try {
      if (editTagId) {
        await updateTag(editTagId, { title: formData.title.trim() });
        toast("Tag updated successfully!");
      } else {
        const updatedFormData = {
          ...formData,
          title: formData.title.trim(),
          author: userInfo.userId,
        };
        await createTag(updatedFormData);
        toast("Tag created successfully!");
      }
  
      fetchTags();
      setEditTagId(null);
      setFormData({ title: "", author: "" });
    } catch (err) {
      toast("Failed to process tag: " + err.message);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <>
      <h2>{editTagId ? "Edit Tag" : "Add Tag"}</h2>
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
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Processing..." : editTagId ? "Update Tag" : "Add Tag"}
        </button>
        {editTagId && (
          <button className="btn mx-2" type="button" onClick={() => setEditTagId(null)}>
            Cancel
          </button>
        )}
      </form>

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.author.fullname || "N/A"}</td>
              <td>
                <button className="btn" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn mx-2" onClick={() => handleDelete(item._id)} disabled={loading}>
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
