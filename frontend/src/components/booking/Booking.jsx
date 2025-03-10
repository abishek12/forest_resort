import React, { useState, useEffect } from "react";
import { CiClock1, CiMail, CiPhone } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { motion } from "framer-motion";
import "../../assets/css/booking.css";

const Booking = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

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
    const day = days[date.getDay()]; 
    const dateNumber = String(date.getDate()).padStart(2, "0");
    return { day, dateNumber };
  };

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleRatingChange = (newValue) => {
    setRating(newValue);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    alert("Thank you for your feedback!");
    setFeedback("");
    setRating(0);
  };

  // Animation variants for date cards
  const dateCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    selected: { scale: 1.1, backgroundColor: "#6c757d", color: "#fff" },
  };

  const steps = ["Basic Details", "Time Slots", "Confirmation"];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
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
        );
      case 1:
        return (
          <div className="card p-4">
            <p className="h4 mb-4">Select Slot</p>
            <div className="row mb-4">
              {dates.map((date, index) => {
                const { day, dateNumber } = formatDate(date);
                const isSelected =
                  selectedDate &&
                  date.toDateString() === selectedDate.toDateString();

                return (
                  <div className="col-lg-2 col-md-3 col-sm-4 mb-2" key={index}>
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
        );
      case 2:
        return (
          <div className="card p-4 mt-4">
            <h4>Confirmation</h4>
            <hr className="border border-secondary border-1 opacity-10 mb-4" />
            <p>Please confirm your booking details.</p>
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
            <div className="row mt-4">
              <p className="col-12">
                <CiClock1 />
                {selectedDate ? selectedDate.toLocaleString() : "Select a date"}
              </p>
            </div>
          </div>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      <div className="m-5">
        {/* Custom Stepper */}
        <div className="stepper">
          {steps.map((label, index) => (
            <div
              key={label}
              className={`step ${index === activeStep ? "active" : ""}`}
            >
              <div className="step-circle">{index + 1}</div>
              <div className="step-label">{label}</div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12">
            {getStepContent(activeStep)}
            <div className="mt-4">
              <button
                className="btn btn-secondary"
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handleNext}
                style={{ marginLeft: "10px" }}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </button>
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
          </div>
        </div>

        {/* Rating and Feedback Section */}
        <div className="row mt-4">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card p-4">
              <h4>Rate Your Experience</h4>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? "active" : ""}`}
                    onClick={() => handleRatingChange(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="card p-4">
              <h4>Customer Feedback</h4>
              <textarea
                rows={4}
                className="form-control"
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Share your feedback..."
              />
              <button
                className="btn btn-primary mt-3"
                onClick={handleSubmitFeedback}
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;