import React, { useEffect, useState } from "react";
import { MdPreview, MdOutlineDelete } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

import "./Contact.scss";
import {
  listContacts,
  removeContact,
  updateContact,
} from "../../../../actions/contactActions";
import { toast } from "react-toastify";

const TABLE_HEADS = ["S.N", "Name", "Email", "Status", "Actions"];

const Contact = () => {
  const [items, setItems] = useState([]);
  const [successUpdate, setSuccessUpdate] = useState(false);
  const [successDelete, setSuccessDelete] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");

  // Fetch contacts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const data = await listContacts("", 1, 10, "desc", statusFilter);

        setItems(data.items);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, [successDelete, successUpdate, statusFilter]);

  const reviewHandler = async (id, status) => {
    try {
      let data = await updateContact(id, status);
      if (data) {
        toast("Status Updated");
        setSuccessUpdate(true);
      }
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Delete handler
  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure")) {
      try {
        await removeContact(id, "");
        setSuccessDelete(true);
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  // Modal open handler
  const openModal = (contact) => {
    setSelectedContact(contact);
  };

  // handle status filter
  const handleStatusFilter = (status) => {
    setStatusFilter(status);
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Contact Responses</h4>
      </div>

      <div className="filter-container col-3 mb-4">
        <label htmlFor="" className="form-label">Status</label>
        <select
          className="form-select"
          onChange={(e) => handleStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="reviewed">Reviewed</option>
        </select>
      </div>

      <div className="data-table-diagram">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items?.map((contact, index) => (
              <tr key={contact._id}>
                <td>{index + 1}</td>
                <td>{contact.fullname}</td>
                <td>{contact.email}</td>
                <td>
                  <span
                    className={`badge ${
                      contact.status === "pending"
                        ? "text-bg-warning"
                        : "text-bg-success"
                    }`}
                  >
                    {contact.status}
                  </span>
                </td>
                <td className="dt-cell-action">
                  <button
                    className="btn mx-2"
                    onClick={() => openModal(contact)}
                  >
                    <MdPreview />
                  </button>
                  <button
                    className="btn mx-2"
                    onClick={() =>
                      reviewHandler(
                        contact._id,
                        contact.status === "pending" ? "reviewed" : "pending"
                      )
                    }
                  >
                    {contact.status === "pending" ? (
                      <FaCheckDouble />
                    ) : (
                      <FaDeleteLeft />
                    )}
                  </button>
                  <button
                    className="btn"
                    onClick={() => deleteHandler(contact._id)}
                  >
                    <MdOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bootstrap Modal to view full contact details */}
      {selectedContact && (
        <>
          <div className="modal-backdrop fade show"></div>{" "}
          {/* Background blur */}
          <div
            className="modal fade show"
            id="contactModal"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
            aria-labelledby="contactModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title" id="contactModalLabel">
                    Contact Details
                  </h3>
                  <button
                    type="button"
                    className="close text-danger"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setSelectedContact(null)}
                    style={{
                      fontSize: "1.5rem",
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                    }} // Position close icon to top-right
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    <strong>Name:</strong> {selectedContact.fullname}
                  </p>
                  <p>
                    <strong>Email:</strong> {selectedContact.email}
                  </p>
                  <p>
                    <strong>Subject:</strong> {selectedContact.subject}
                  </p>
                  <p>
                    <strong>Message:</strong> {selectedContact.message}
                  </p>
                  <p>
                    <strong>Status:</strong>{" "}
                    {selectedContact.status.toUpperCase()}
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => setSelectedContact(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Contact;
