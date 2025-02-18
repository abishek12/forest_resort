import React, {useState} from "react";
import ContactInfo from "../contact/ContactInfo";
import BookingForm from "../form/BookingForm";
import BookingTime from "./BookingTime";


const Booking = () => {
  const [isQrVisible, setIsQrVisible] = useState(false);

  return (
    <>
      <div
        className="contact-area overflow-hidden default-padding"
        style={{ backgroundImage: "url(/img/shape/map.png)" }}
      >
        <div className="shape-right-bottom"></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-8">
              <BookingForm setIsQrVisible={setIsQrVisible} />
            </div>
            <div className="col-tact-stye-one col-lg-3 offset-lg-1 mt--80 mt-xs-50">
              <BookingTime isQrVisible={isQrVisible}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
