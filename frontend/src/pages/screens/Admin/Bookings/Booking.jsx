import React, { useState, useEffect } from "react";
import axios from "axios";

const TABLE_HEADS = ["Time", "Booked/Available"];

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [isToday, setIsToday] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = () => {
    axios
      .get("/booking")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setBookings(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  };

  const handleToggle = (id, currentStatus) => {
    axios
      .put(`/booking/${id}/status`, {
        isBooked: !currentStatus,
      })
      .then((response) => {
        const updatedBooking = response.data;
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === id ? updatedBooking : booking
          )
        );
      })
      .catch((error) => console.error("Error updating booking status:", error));
  };

  const handleDateChange = (today) => {
    setIsToday(today);
  };

  // Filter bookings based on isToday value
  const filteredBookings = bookings.filter(
    (booking) => booking.isToday === isToday
  );

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Manage Bookings</h4>
      </div>
      <div className="date-selection">
        <button
          onClick={() => handleDateChange(true)}
          className={`${
            isToday
              ? "active tw-bg-blue-500 tw-text-white"
              : "tw-bg-transparent tw-text-black hover:tw-text-white"
          }`}
        >
          Today
        </button>
        <button
          onClick={() => handleDateChange(false)}
          className={`${
            !isToday
              ? "active tw-bg-blue-500 tw-text-white"
              : "tw-bg-transparent tw-text-black hover:tw-text-white"
          }`}
        >
          Tomorrow
        </button>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS.map((th, index) => (
                <th key={index} style={{ textAlign: "start" }}>
                  {th}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBookings.length > 0 ? (
              filteredBookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.time}</td>
                  <td>
                    <button
                      onClick={() =>
                        handleToggle(booking._id, booking.isBooked)
                      }
                      className={` ${
                        booking.isBooked ? "tw-bg-red-500" : "tw-bg-green-500"
                      }`}
                    >
                      {booking.isBooked ? "Booked" : "Available"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={2} style={{ textAlign: "center" }}>
                  No bookings for this date.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Booking;
