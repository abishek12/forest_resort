import React, { useState, useEffect } from 'react';

const TimeSlotReservation = () => {
  const availableSlots = [
    '06:00 AM - 07:00 AM',
    '07:00 AM - 08:00 AM',
    '08:00 AM - 09:00 AM',
    '09:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 01:00 PM',
    '01:00 PM - 02:00 PM',
    '02:00 PM - 03:00 PM',
    '03:00 PM - 04:00 PM',
    '04:00 PM - 05:00 PM',
    '05:00 PM - 06:00 PM',
    '06:00 PM - 07:00 PM',
    '07:00 PM - 08:00 PM',
    '08:00 PM - 09:00 PM',
    '09:00 PM - 10:00 PM'
  ];

  const [selectedSlot, setSelectedSlot] = useState(null);
  const [customTime, setCustomTime] = useState("");
  const [slotsAvailability, setSlotsAvailability] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const fetchUnavailableSlots = async () => {
      try {
        const response = await fetch("http://localhost:8888/api/booking/unavailable-times?date=2025-03-02&service=67a8af10655fb70f058f0f54");
        if (response.ok) {
          const data = await response.json();
          const unavailableSlots = data.unavailableSlots || [];
          
          const updatedSlotsAvailability = availableSlots.reduce((acc, slot) => {
            acc[slot] = !unavailableSlots.includes(slot);
            return acc;
          }, {});
          
          setSlotsAvailability(updatedSlotsAvailability);
        } else {
            console.error("Failed to fetch unavailable slots:", response.status);
        }
      } catch (error) {
        console.error("Error fetching unavailable slots:", error);
      }
    };

    fetchUnavailableSlots();
  }, []);

  const handleSelectSlot = (slot) => {
    if (slotsAvailability[slot]) {
      setSelectedSlot(slot);
      setSlotsAvailability((prev) => ({
        ...prev,
        [slot]: false,
      }));
      submitTime(slot);
    }
  };

  const handleSubmit = () => {
    if (customTime && slotsAvailability[customTime]) {
      setSelectedSlot(customTime);
      setSlotsAvailability((prev) => ({
        ...prev,
        [customTime]: false,
      }));
      submitTime(customTime);
      setCustomTime("");
    }
  };

  const handleCustomTimeChange = (e) => {
    setCustomTime(e.target.value);
  };

  const submitTime = async (timeSlot) => {
    setLoading(true);
    setSuccessMessage(null);

    try {
      const response = await fetch("http://localhost:8888/api/booking/unavailable-times?date=2025-03-02&service=67a8af10655fb70f058f0f54", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timeSlot: timeSlot,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        setSuccessMessage("Your reservation has been successfully submitted!");
      } else {
        console.error("Error submitting reservation:", response.status, response.statusText);
        // setSuccessMessage("There was an error submitting your reservation.");
      }
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setSuccessMessage("There was an error submitting your reservation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <p className="tw-text-xl tw-text-black -tw-ml-10" style={{ fontFamily: "Poppins" }}>
        Select a time slot for your reservation:
      </p>

      <div className="tw-grid tw-grid-cols-4 tw-text-sm tw-gap-1 -tw-translate-x-20" style={{ fontFamily: "Poppins", width: "400px" }}>
        {availableSlots.map((slot, index) => (
          <div key={index}>
            <button
              onClick={() => handleSelectSlot(slot)}
              disabled={!slotsAvailability[slot]}
              style={{
                backgroundColor: !slotsAvailability[slot] ? "red" : selectedSlot === slot ? "#1A7218" : "#B5DE4C", 
                margin: "2px",
                padding: "2px 2px",
                cursor: !slotsAvailability[slot] ? "not-allowed" : "pointer",
              }}
            >
              {slot}
            </button>
          </div>
        ))}
      </div>

      <div className="tw-mt-5 tw-text-xl">
        <label htmlFor="customTime">Or enter your preferred time: </label>
        <input
          type="text"
          id="customTime"
          value={customTime}
          onChange={handleCustomTimeChange}
          className="tw-px-2"
          placeholder="e.g., 11:30 AM - 12:30 PM"
        />
        <button className="tw-mt-5 tw-text-sm tw-ml-3 tw-bg-[#02952A]" onClick={handleSubmit}>Submit Custom Time</button>
      </div>

      {selectedSlot && (
        <div className="tw-mt-4 tw-text-sm">
          <p>Your Reservation</p>
          <p>You have selected: {selectedSlot}</p>
        </div>
      )}

      {loading && <p>Loading...</p>}
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default TimeSlotReservation;
