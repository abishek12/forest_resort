import React, { useEffect, useState } from "react";
import { listService, removeService } from "../../../../actions/serviceActions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const AdminService = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  return (
    <>
      <section className="content-area-table">
        <div className="data-table-info">
          <h4 className="data-table-title">Services</h4>
          <Link to="/user/add-service">
            <button className="btn btn-primary">Add Service</button>
          </Link>
        </div>

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
                    <Link to={`/user/edit-service/${service._id}`}>
                      <button className="btn edit-btn">Edit</button>
                    </Link>
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
