import axios from "axios";
import React, { useEffect, useState } from "react";

const BookingTime = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = () => {
    axios
      .get("http://localhost:5000/api/booking")
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

  const renderBookingTable = (dayServices, date, label) => (
    <div>
      <div>
        <div className="tw-bg-[#258e25] tw-text-white tw-rounded-md tw-p-2 tw-mt-6">
          <span>{formatDate(date)}</span>
          <span>({label})</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>Time</th>
            </tr>
          </thead>
          <tbody className="tw-grid tw-grid-cols-4 tw-gap-2 tw-align-middle">
            {dayServices.map((service) => (
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
  );

  return (
    <section>
      <h3 className="tw-text-2xl tw-font-bold tw-text-center tw-mb-6">
        Booking Status
      </h3>
      {renderBookingTable(todayServices, today, "Today")}
      {renderBookingTable(tomorrowServices, tomorrow, "Tomorrow")}
      <p className="tw-text-center tw-text-sm tw-mt-6">
        Note: * If the time is red, it means that the time is already booked.
      </p>
    </section>
  );
};

export default BookingTime;
