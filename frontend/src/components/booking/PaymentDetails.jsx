import React from "react";

const PaymentDetails = ({ setTransactionId, setPaidAmount }) => {
  return (
    <div className="row">
      <div className="col-lg-6">
        <input
          className="form-control no-arrows"
          placeholder="Transaction No.*"
          onChange={(e) => setTransactionId(e.target.value)}
        />
      </div>
      <div className="col-lg-6">
        <input
          className="form-control no-arrows"
          placeholder="Advance Paid Amount*"
          type="number"
          onChange={(e) => setPaidAmount(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PaymentDetails;