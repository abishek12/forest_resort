import React, { useState, useEffect, useContext } from "react";
import { convertDateTimeSlot } from "../../utils/date-time";
import { ContextData } from "./Booking";
const TimeSlotReservation = () => {

  //consume context
  const { setSelectDateFunction } = useContext(ContextData);

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
  const currentTime = new Date();

  useEffect(() => {
    const fetchUnavailableSlots = async () => {
      try {
        setLoading(true);
        const formattedDate = convertDateTimeSlot(date);
        console.log("Fetching unavailable slots for:", formattedDate);

        const response = await fetch(
          `http://localhost:8888/api/booking/unavailable-times?date=${formattedDate}&service=67a8af10655fb70f058f0f54`
        );

        if (response.ok) {
          const data = await response.json();
          const unavailableSlots = data.unavailableSlots || [];

          const formattedUnavailableSlots = unavailableSlots.map((slot) => {
            const startTime = new Date(`1970-01-01T${slot.start}:00`).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            const endTime = new Date(`1970-01-01T${slot.end}:00`).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            });

            return `${startTime} - ${endTime}`;
          });

          const updatedSlotsAvailability = availableSlots.reduce((acc, slot) => {
            const slotTime = new Date(`1970-01-01T${slot.split(" - ")[0]}:00`);
            const isPast = slotTime < currentTime;
            acc[slot] = !formattedUnavailableSlots.includes(slot) && !isPast;
            return acc;
          }, {});

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
          [selectedSlot]: true,
        }));
      }

      setSelectedSlot(slot);
      setSlotsAvailability((prev) => ({
        ...prev,
        [slot]: false,
      }));
      submitTime(slot);
    }
  };

  const submitTime = (slot) => {
    setSuccessMessage(`Successfully reserved ${slot}`);
    setTimeout(() => setSuccessMessage(null), 1000);

    //from here i am sending slot by splitting to the setSelectDateFunction
    //it will be go to contextdata and change the contextValue, the context value is consumed by form and change the 
    //date in time picker
    const [start, end] = slot.split('-');
    setSelectDateFunction(start, end)
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <p
        className="tw-text-xl tw-text-black"
        style={{ fontFamily: "Poppins", textAlign: "center", marginBottom: "20px" }}
      >
        Select a time slot for your reservation:
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
          fontFamily: "Poppins",
          width: "100%",
          margin: "0 auto",
        }}
        className="time-slot-grid"
      >
        {availableSlots.map((slot, index) => {
          const slotTime = new Date(`1970-01-01T${slot.split(" - ")[0]}:00`);
          const isPast = slotTime < currentTime;
          return (
            <button
              key={index}
              onClick={() => handleSelectSlot(slot)}
              disabled={!slotsAvailability[slot] || isPast}
              style={{
                backgroundColor: !slotsAvailability[slot] ? "#FF4C4C" : isPast ? "#A9A9A9" : selectedSlot === slot ? "#1E90FF" : "#B5DE4C",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "10px",
                cursor: !slotsAvailability[slot] || isPast ? "not-allowed" : "pointer",
                textAlign: "center",
                fontSize: "0.9rem",
              }}
            >
              {slot}
            </button>
          );
        })}
      </div>

      {loading && <p style={{ textAlign: "center", marginTop: "20px" }}>Loading...</p>}
      {successMessage && <p style={{ textAlign: "center", marginTop: "20px" }}>{successMessage}</p>}

      <style>
        {`
          @media (max-width: 768px) {
            .time-slot-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 480px) {
            .time-slot-grid {
              grid-template-columns: repeat(1, 1fr);
            }
          }
        `}
      </style>
    </div>
  );
};

export default TimeSlotReservation;