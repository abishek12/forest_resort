import React from "react";
import { Modal } from "react-bootstrap";

const PaymentModal = ({ show, onHide, paymentData }) => {
  const handleAccept = () => {
    // Handle accept logic here
    console.log("Payment accepted");
    onHide(); // Close the modal after action
  };

  const handleReject = () => {
    // Handle reject logic here
    console.log("Payment rejected");
    onHide(); // Close the modal after action
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
              <strong>Reference:</strong> {paymentData.reference}
            </p>
            <p>
              <strong>Amount:</strong> Rs.{paymentData.amount}
            </p>
            <p>
              <strong>Status:</strong> {paymentData.status}
            </p>
          </div>
        ) : (
          <p>Loading payment details...</p>
        )}
      </Modal.Body>
      <Modal.Footer>
        <div className="d-flex justify-content-between w-100">
          {paymentData?.status === "pending" ? (
            <>
              <button className="btn btn-success me-2" onClick={handleAccept}>
                Accept
              </button>
              {/* <button className="btn btn-danger me-2" onClick={handleReject}>
                Reject
              </button> */}
            </>
          ) : (
            <button
              className={`btn ${
                paymentData?.status === "success"
                  ? "btn-success"
                  : paymentData?.status === "reject"
                  ? "btn-danger"
                  : "btn-secondary"
              }`}
              disabled
            >
              {paymentData?.status === "success"
                ? "Success"
                : paymentData?.status === "reject"
                ? "Rejected"
                : "Status"}
            </button>
          )}

          <button className="btn btn-secondary" onClick={onHide}>
            Close
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
