import React, { useState, useEffect } from "react";
import {
  listOffers,
  removeOffer,
  createOffer,
  editOffer,
} from "../../../../actions/offerActions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const AdminOffers = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    user: "",
    status: "draft",
    featured_image: null,
  });

  // Get userInfo from Redux store
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    fetchOffers();
  }, []);

  const fetchOffers = async () => {
    try {
      setLoading(true);
      const data = await listOffers("", 1, 10, "desc");
      setTags(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, featured_image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Prepare form data
      const submissionData = new FormData();
      submissionData.append("title", formData.title);
      submissionData.append("status", formData.status);
      submissionData.append("user", userInfo.userId);
      submissionData.append("featured_image", formData.featured_image);

      await createOffer(submissionData);
      toast("Offer created successfully!");

      fetchOffers();
      setShowModal(false);
      setFormData({ title: "", status: "draft", featured_image: null });
    } catch (error) {
      toast(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        setLoading(true);
        await removeOffer(id);
        toast("Offer deleted successfully!");
        fetchOffers();
      } catch (err) {
        toast("Failed to delete offer: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = async (id) => {
    if (window.confirm("Are you sure you want to edit this offer?")){
      try{
        setLoading(true);
        await editOffer(id);
        toast("Offer loaded for editing!");
        fetchOffers();
      } catch (err) {
        toast("Failed to edit offer: " + err.message);
      } finally {
        setLoading(false);
      }
      }
    }
  

  return (
    <>
      <button
        className="btn btn-primary mb-3"
        onClick={() => setShowModal(true)}
      >
        Add Offer
      </button>

      {showModal && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Offer</h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setShowModal(false)}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    onChange={handleChange}
                    value={formData.title}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">User</label>
                  <input
                    type="text"
                    className="form-control"
                    value={userInfo.fullname}
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Featured Image</label>
                  <input
                    type="file"
                    className="form-control"
                    name="featured_image"
                    onChange={handleFileChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-control"
                    name="status"
                    onChange={handleChange}
                    value={formData.status}
                  >
                    <option value="published">Published</option>
                    <option value="draft">Draft</option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Offer"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {loading && <div>Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}

      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.title}</td>
              <td>{item.user.fullname || "N/A"}</td>
              <td>{item.status}</td>
              <td className="tw-space-x-4">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item._id)}
                  disabled={loading}
                >
                  {loading ? "Deleting..." : "Delete"}
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(item._id)}
                  disabled={loading}
                >
                  {loading ? "Editing..." : "Edit"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
