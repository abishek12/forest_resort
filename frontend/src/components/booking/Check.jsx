import axios from "axios";
import React, { useEffect, useState } from "react";

const BookingTime = () => {
  const [services, setServices] = useState([]);
  const [selectedDate, setSelectedDate] = useState("today");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios
      .get("http://localhost:8888/api/booking")
      .then((response) => {
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching services:", error));
  };

  const todayServices = services.filter((service) => service.isToday);
  const tomorrowServices = services.filter((service) => !service.isToday);

  const formatDate = (date) => {
    const options = { month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <section>
      <h3>Booking Status</h3>
      <div className="booking-info">
        <div>
          <button
            className={`tw-bg-blue-500 tw-text-white tw-rounded-md tw-p-2 ${
              selectedDate === "today" ? "tw-ring-2 tw-ring-blue-700" : ""
            }`}
            onClick={() => setSelectedDate("today")}
          >
            <span>(Today)</span>
            <span>{formatDate(today)}</span>
          </button>
          <button
            className={`tw-bg-blue-500 tw-text-white tw-rounded-md tw-p-2 tw-ml-2 ${
              selectedDate === "tomorrow" ? "tw-ring-2 tw-ring-blue-700" : ""
            }`}
            onClick={() => setSelectedDate("tomorrow")}
          >
            <span>(Tomorrow)</span>
            <span>{formatDate(tomorrow)}</span>
          </button>
          <table>
            <thead>
              <tr>
                <th>Time</th>
              </tr>
            </thead>
            <tbody className="booking-time tw-grid tw-grid-cols-4">
              {(selectedDate === "today"
                ? todayServices
                : tomorrowServices
              ).map((service) => (
                <tr key={service._id}>
                  <td
                    className={`tw-text-white tw-rounded-md tw-p-2 ${
                      service.isBooked ? "tw-bg-red-500" : "tw-bg-green-500"
                    }`}
                  >
                    {service.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BookingTime;
