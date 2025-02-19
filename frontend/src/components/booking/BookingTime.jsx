
import React from "react";

const BookingTime = ({isQrVisible }) => {
  return (
    <section>
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
