import React from "react";
import ContactInfo from "../contact/ContactInfo";
import BookingForm from "../form/BookingForm";
import BookingTime from "./BookingTime";

const Booking = () => {
  return (
    <>
      <div
        className="contact-area overflow-hidden default-padding"
        style={{ backgroundImage: "url(/img/shape/map.png)" }}
      >
        <div className="shape-right-bottom"></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-6">
              <BookingForm />
            </div>
            <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
              <BookingTime />
              {/* <ContactInfo /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
