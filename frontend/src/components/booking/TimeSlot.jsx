import React, { useState, useEffect } from "react";
import { convertDateTimeSlot } from "../../utils/date-time"; // Ensure this function correctly formats the date

const TimeSlotReservation = () => {
  const availableSlots = [
    "06:00 AM - 07:00 AM",
    "07:00 AM - 08:00 AM",
    "08:00 AM - 09:00 AM",
    "09:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "12:00 PM - 01:00 PM",
    "01:00 PM - 02:00 PM",
    "02:00 PM - 03:00 PM",
    "03:00 PM - 04:00 PM",
    "04:00 PM - 05:00 PM",
    "05:00 PM - 06:00 PM",
    "06:00 PM - 07:00 PM",
    "07:00 PM - 08:00 PM",
    "08:00 PM - 09:00 PM",
    "09:00 PM - 10:00 PM",
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [slotsAvailability, setSlotsAvailability] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchUnavailableSlots = async () => {
      try {
        setLoading(true);
        const formattedDate = convertDateTimeSlot(date); // Format the date properly
        console.log("Fetching unavailable slots for:", formattedDate);

        const response = await fetch(
          `http://localhost:8888/api/booking/unavailable-times?date=${formattedDate}&service=67a8af10655fb70f058f0f54`
        );

        if (response.ok) {
          const data = await response.json();
          const unavailableSlots = data.unavailableSlots || [];

          // Convert API response into a formatted array of unavailable slots
          const formattedUnavailableSlots = unavailableSlots.map((slot) => {
            const startTime = new Date(
              `1970-01-01T${slot.start}:00`
            ).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            const endTime = new Date(
              `1970-01-01T${slot.end}:00`
            ).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            return `${startTime} - ${endTime}`;
          });

          console.log("Blocked slots:", formattedUnavailableSlots);

          // Update slot availability by comparing availableSlots and unavailableSlots
          const updatedSlotsAvailability = availableSlots.reduce(
            (acc, slot) => {
              acc[slot] = !formattedUnavailableSlots.includes(slot); // Block unavailable slots
              return acc;
            },
            {}
          );

          setSlotsAvailability(updatedSlotsAvailability);
        } else {
          console.error("Failed to fetch unavailable slots:", response.status);
        }
      } catch (error) {
        console.error("Error fetching unavailable slots:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUnavailableSlots();
  }, [date]);

  const handleSelectSlot = (slot) => {
    if (slotsAvailability[slot]) {
      if (selectedSlot) {
        setSlotsAvailability((prev) => ({
          ...prev,
          [selectedSlot]: true, // Re-enable previously selected slot
        }));
      }

      setSelectedSlot(slot);
      setSlotsAvailability((prev) => ({
        ...prev,
        [slot]: false, // Block the newly selected slot
      }));
      submitTime(slot);
    }
  };

  return (
    <div>
      <p className="tw-text-xl tw-text-black -tw-ml-10" style={{ fontFamily: "Poppins" }}>
        Select a time slot for your reservation:
      </p>

      <div
        className="tw-grid tw-grid-cols-4 tw-text-sm tw-gap-1 -tw-translate-x-20"
        style={{ fontFamily: "Poppins", width: "400px" }}
      >
        {availableSlots.map((slot, index) => (
          <button
            key={index}
            onClick={() => handleSelectSlot(slot)}
            disabled={!slotsAvailability[slot]} // Disable booked slots
            style={{
              backgroundColor: !slotsAvailability[slot]
                ? "red" // Unavailable slots are red
                : selectedSlot === slot
                ? "#1E90FF" // Selected slot is blue
                : "#B5DE4C", // Available slots are green
              margin: "2px",
              padding: "2px 2px",
              cursor: !slotsAvailability[slot] ? "not-allowed" : "pointer",
            }}
          >
            {slot}
          </button>
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default TimeSlotReservation;
