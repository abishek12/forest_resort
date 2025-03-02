import React, { useState } from 'react';

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

  const handleSelectSlot = (slot) => {
    setSelectedSlot(slot);
    setCustomTime("");
  };

  const handleCustomTimeChange = (e) => {
    setCustomTime(e.target.value);
  };

  const handleSubmit = () => {
    if (customTime) {
      setSelectedSlot(customTime);
    }
  };

  return (
    <div className="">
      <p className="tw-text-xl tw-text-black -tw-ml-10" style={{
        fontFamily:"Poppins",
        
      }}
      >Select a time slot for your reservation:</p>

      <div className=" tw-grid tw-grid-cols-4 tw-text-sm tw-gap-1 -tw-translate-x-20" style={{
        fontFamily:"Poppins",
        width:"400px",
      }}>
        {availableSlots.map((slot, index) => (
          <div key={index}>
            <button
              onClick={() => handleSelectSlot(slot)}
              style={{
                backgroundColor: selectedSlot === slot ? "#1A7218" : "#B5DE4C",
                margin: "2px",
                padding: "2px 2px",
                cursor: "pointer",
              }}
            >
              {slot}
            </button>
          </div>
        ))}
      </div>

      <div>
        <label htmlFor="customTime">Or enter your preferred time: </label>
        <input
          type="text"
          id="customTime"
          value={customTime}
          onChange={handleCustomTimeChange}
          className="tw-px-2"
          placeholder=" e.g., 11:30 AM - 12:30 PM"
        />
        <button onClick={handleSubmit}>Submit Custom Time</button>
      </div>

      {selectedSlot && (
        <div>
          <p>Your Reservation</p>
          <p>You have selected: {selectedSlot}</p>
        </div>
      )}
    </div>
  );
};

export default TimeSlotReservation;
