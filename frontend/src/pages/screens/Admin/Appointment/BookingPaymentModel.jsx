import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const PaymentModal = ({ show, onHide, paymentData }) => {
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleStatusChange = async () => {
    if (!selectedStatus) return;

    try {
      const response = await fetch(
        `http://localhost:8888/api/booking/${paymentData?.id}/payment-status`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: selectedStatus }),
        }
      );

      if (response.ok) {
        console.log("Payment status updated to:", selectedStatus);
        onHide(); // Close modal after update
      } else {
        console.error("Failed to update payment status");
      }
    } catch (error) {
      console.error("Error updating payment status:", error);
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Payment Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {paymentData ? (
          <div>
            <p>
              <strong>Reference:</strong> {paymentData.info.reference}
            </p>
            <p>
              <strong>Amount:</strong> Rs.{paymentData.info.amount}
            </p>
            <p>
              <strong>Status:</strong> {paymentData.info.status}
            </p>

            {/* Dropdown for Payment Status Update */}
            {paymentData.info.status !== "success" && paymentData.info.status !== "reject" && (
              <div className="mt-3">
                <label className="form-label">Update Payment Status:</label>
                <select
                  className="form-select"
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                >
                  <option value="">Select status</option>
                  <option value="paid">Paid</option>
                  <option value="failed">Failed</option>
                  <option value="refunded">Refunded</option>
                </select>
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleStatusChange}
                  disabled={!selectedStatus}
                >
                  Update Status
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Loading payment details...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
