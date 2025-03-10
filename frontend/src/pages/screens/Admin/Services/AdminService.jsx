import React, { useEffect, useState } from "react";
import {
  listService,
  removeService,
  createService,
  editService,
} from "../../../../actions/serviceActions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const AdminService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "futsal",
    futsal: {
      courtSize: "",
      surfaceType: "",
    },
    price: "",
    images: ["https://example.com/image.jpg"],
    availability: {
      address: "",
      contact: "",
    },
  });

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    fetchService();
  }, []);

  const fetchService = async () => {
    try {
      setLoading(true);
      const data = await listService("", 1, 10, "desc");
      setServices(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        setLoading(true);
        await removeService(id);
        toast("Service deleted successfully!");
        fetchService();
      } catch (err) {
        toast("Failed to delete service: " + err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEdit = (id) => {
    const serviceToEdit = services.find((service) => service._id === id);
    setSelectedService(serviceToEdit);
    if (serviceToEdit) {
      setFormData({
        name: serviceToEdit.name,
        description: serviceToEdit.description,
        type: serviceToEdit.type,
        futsal: serviceToEdit.futsal,
        price: serviceToEdit.price,
        images: serviceToEdit.images,
        availability: serviceToEdit.availability,
      });
      setShowEditModal(true);
    } else {
      console.log("Service not found");
    }
  };

  useEffect(() => {}, [formData]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      // Create a new FormData object
      const submissionData = new FormData();

      // Append basic fields
      submissionData.append("name", formData.name);
      submissionData.append("description", formData.description);
      submissionData.append("type", formData.type);
      submissionData.append("price", formData.price);

      // Append nested fields
      submissionData.append("futsal[courtSize]", formData.futsal.courtSize);
      submissionData.append("futsal[surfaceType]", formData.futsal.surfaceType);
      submissionData.append(
        "availability[address]",
        formData.availability.address
      );
      submissionData.append(
        "availability[contact]",
        formData.availability.contact
      );

      // Append images
      formData.images.forEach((image) => {
        submissionData.append("images", image);
      });

      // Call the API to update the service
      await editService(selectedService._id, submissionData);

      // Handle the response
      toast("Service updated successfully!");

      // Optionally, you can refetch the service or close the modal
      fetchService();
      setShowEditModal(false);
    } catch (error) {
      // Handle errors
      console.error("Error during service update:", error);
      toast(error.message || "An error occurred while updating the service.");
    } finally {
      // Reset loading state
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNestedChange = (e, field) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        [name]: value,
      },
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFormData({ ...formData, images: files });
    } else {
      const imageUrl = e.target.value;
      setFormData({ ...formData, images: [imageUrl] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const submissionData = new FormData();
      submissionData.append("name", formData.name);
      submissionData.append("description", formData.description);
      submissionData.append("type", formData.type);
      submissionData.append("price", formData.price);

      submissionData.append("futsal[courtSize]", formData.futsal.courtSize);
      submissionData.append("futsal[surfaceType]", formData.futsal.surfaceType);
      submissionData.append(
        "availability[address]",
        formData.availability.address
      );
      submissionData.append(
        "availability[contact]",
        formData.availability.contact
      );

      // Add images if any
      formData.images.forEach((image) => {
        submissionData.append("images", image);
      });

      await createService(formData); // Assuming this sends to your API
      toast("Service created successfully!");
      fetchService();
      setShowModal(false);
    } catch (error) {
      toast("Failed to create service: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Services</h4>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add Service
          </button>
        </div>

        {showModal && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Service</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Court Size</label>
                      <input
                        type="text"
                        className="form-control"
                        name="courtSize"
                        value={formData.futsal.courtSize}
                        onChange={(e) => handleNestedChange(e, "futsal")}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Surface Type</label>
                      <input
                        type="text"
                        className="form-control"
                        name="surfaceType"
                        value={formData.futsal.surfaceType}
                        onChange={(e) => handleNestedChange(e, "futsal")}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.availability.address}
                        onChange={(e) => handleNestedChange(e, "availability")}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact</label>
                      <input
                        type="text"
                        className="form-control"
                        name="contact"
                        value={formData.availability.contact}
                        onChange={(e) => handleNestedChange(e, "availability")}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Images</label>
                      <input
                        type="file"
                        className="form-control"
                        name="images"
                        onChange={handleFileChange}
                      />
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
                        type="submit"
                        className="btn btn-primary"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Save Service"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Service Modal */}
        {showEditModal && selectedService && (
          <div className="modal fade show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Service</h5>
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowEditModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Price</label>
                      <input
                        type="number"
                        className="form-control"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Court Size</label>
                      <input
                        type="text"
                        className="form-control"
                        name="courtSize"
                        value={formData.futsal.courtSize}
                        onChange={(e) => handleNestedChange(e, "futsal")}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Surface Type</label>
                      <input
                        type="text"
                        className="form-control"
                        name="surfaceType"
                        value={formData.futsal.surfaceType}
                        onChange={(e) => handleNestedChange(e, "futsal")}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={formData.availability.address}
                        onChange={(e) => handleNestedChange(e, "availability")}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact</label>
                      <input
                        type="text"
                        className="form-control"
                        name="contact"
                        value={formData.availability.contact}
                        onChange={(e) => handleNestedChange(e, "availability")}
                      />
                    </div>
                    <div className=" mb-3">
                      <div>
                        <label className="form-label">New Images</label>
                        <input
                          type="file"
                          className="form-control"
                          name="images"
                          onChange={handleFileChange}
                          multiple
                        />
                      </div>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowEditModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleUpdate}
                    disabled={loading}
                  >
                    {loading ? "Updating..." : "Update Service"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Services Table */}
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.description}</td>
                  <td>{service.type}</td>
                  <td>{service.price}</td>

                  <td className="tw-space-x-2">
                    <button
                      className="btn edit-btn"
                      onClick={() => handleEdit(service._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(service._id)}
                      disabled={loading}
                    >
                      {loading ? "Deleting..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
