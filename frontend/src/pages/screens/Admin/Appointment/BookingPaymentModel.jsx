import React from "react";
import { Modal } from "react-bootstrap";

const PaymentModal = ({ show, onHide, paymentData }) => {
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
        <button className="btn btn-secondary" onClick={onHide}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
