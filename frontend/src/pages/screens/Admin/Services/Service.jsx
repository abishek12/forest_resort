import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Service.scss";

const TABLE_HEADS = ["Services", "Open/Closed"];

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/service")
      .then(response => {
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch(error => console.error("Error fetching services:", error));
  }, []);

  const handleToggle = (id, currentStatus) => {
    axios.put(`http://localhost:5000/api/service/${id}/status`, { isOpen: !currentStatus })
      .then(response => {
        const updatedService = response.data;
        setServices(prevServices =>
          prevServices.map(service =>
            service._id === id ? updatedService : service
          )
        );
      })
      .catch(error => console.error("Error updating service status:", error));
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Manage Services</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index} style={{ textAlign: 'start' }}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map(service => (
              <tr key={service._id}>
                <td>{service.name}</td>
                <td>
                  <button
                    onClick={() => handleToggle(service._id, service.isOpen)}
                    className={`toggle-button ${service.isOpen ? "open" : "closed"}`}
                  >
                    {service.isOpen ? "Open" : "Closed"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Service;
