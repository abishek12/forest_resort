import React, { useState, useEffect } from "react";
import { CiClock1, CiMail, CiPhone } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Booking = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const getDates = () => {
      let today = new Date();
      let datesArray = [];
      for (let i = 0; i < 7; i++) {
        let date = new Date(today);
        date.setDate(today.getDate() + i); // Adding days to today's date
        datesArray.push(date); // Store the date object
      }
      setDates(datesArray);
    };

    getDates();
  }, []);

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const formatDate = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const day = days[date.getDay()]; // Get the day name (e.g., "Sun")
    const dateNumber = String(date.getDate()).padStart(2, "0"); // Get the date as two digits (e.g., "01")
    return { day, dateNumber };
  };

  // Animation variants for date cards
  const dateCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    selected: { scale: 1.1, backgroundColor: "#6c757d", color: "#fff" },
  };

  return (
    <>
      <div className="m-5">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12">
            <div className="card p-4">
              <p className="h4 mb-4">Select Slot</p>

              {/* Displaying next 7 days with animations */}
              <div className="row mb-4">
                {dates.map((date, index) => {
                  const { day, dateNumber } = formatDate(date);
                  const isSelected =
                    selectedDate &&
                    date.toDateString() === selectedDate.toDateString();

                  return (
                    <div className="col-lg-1 col-md-3 col-sm-4 mb-2" key={index}>
                      <motion.div
                        className={`card p-2 text-center ${
                          isSelected ? "bg-secondary text-light" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDateClick(date)}
                        variants={dateCardVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        whileTap="selected"
                      >
                        <p className="mb-1">{day}</p>
                        <p>{dateNumber}</p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h4>Personal Details</h4>
              <hr className="border border-secondary border-1 opacity-10 mb-4" />
              <div className="row mb-4">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaRegUser />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value="Abishek Khanal"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <CiMail />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value="abishekkhanal2056@gmail.com"
                      readOnly
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <div className="input-group">
                    <span className="input-group-text">
                      <CiPhone />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value="9841998678"
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="card p-4">
              <h4>Booking Details</h4>
              <hr className="border border-secondary border-1 opacity-10 mb-2" />
              <p className="text-black-50">Packages / Test Added</p>
              <div className="row">
                <p className="col-6">Futsal</p>
                <p className="col-6 text-end">Rs. 1200</p>
              </div>
              <div className="row">
                <p className="col-6">Advance Amount</p>
                <p className="col-6 text-success text-end">Rs. 300</p>
              </div>
              <hr className="border border-secondary border-1 opacity-10 mb-2" />
              <div className="row">
                <p className="col-6">Remaining Amt.</p>
                <p className="col-6 text-danger text-end">Rs. 900</p>
              </div>
            </div>
            <div className="card p-4 mt-4">
              <h4>Reservation Details</h4>
              <hr className="border border-secondary border-1 opacity-10 mb-2" />
              <p className="text-black-50">Date & Time</p>
              <p>
                <CiClock1 />
                {selectedDate ? selectedDate.toLocaleString() : "Select a date"}
              </p>
            </div>
            <motion.button
              className="btn mt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Proceed to Pay
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;