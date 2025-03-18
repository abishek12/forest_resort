import React from "react";

const BookingDetails = () => {
  return (
    <div className="card p-4">
      <h4>Booking Details</h4>
      <hr className="border border-secondary border-1 opacity-10 mb-2" />
      <p className="text-black-50">Packages / Test Added</p>
      <div className="row">
        <p className="col-6">Futsal</p>
        <p className="col-6 text-end">Rs. 1200</p>
      </div>
      <div className="row">
        <p className="col-6">Advance Amount</p>
        <p className="col-6 text-success text-end">Rs. 300</p>
      </div>
      <hr className="border border-secondary border-1 opacity-10 mb-2" />
      <div className="row">
        <p className="col-6">Remaining Amt.</p>
        <p className="col-6 text-danger text-end">Rs. 900</p>
      </div>
    </div>
  );
};

export default BookingDetails;
