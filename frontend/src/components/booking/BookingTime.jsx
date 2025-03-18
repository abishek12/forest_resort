import React from "react";
import TimeSlot from "../../components/booking/TimeSlot"

const BookingTime = ({isQrVisible }) => {
  return (
    <section>
      <div>
       <TimeSlot />
      </div>
      {isQrVisible ?(
        <div>
          <img src="https://placehold.co/600x400" alt="QR Code" width="200" />
          <p>Scan to pay</p>
        </div>
      ) : ""}
    </section>
  );
};

export default BookingTime;
