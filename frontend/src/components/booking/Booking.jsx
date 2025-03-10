import React, { useState, useEffect } from "react";
import { CiClock1, CiMail, CiPhone } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";
import "../../assets/css/booking.css";

const Booking = () => {
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPeriod, setSelectedPeriod] = useState("am");
  const [selectedService, setSelectedService] = useState("FUTSAL");

  const [ratingsCount, setRatingsCount] = useState({
    5: 10,
    4: 8,
    3: 6,
    2: 4,
    1: 2,
  });
  const totalRatings = Object.values(ratingsCount).reduce(
    (acc, count) => acc + count,
    0
  );

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

  const handleTimeClick = (time) => {
    setSelectedTime(time);
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
    setRatingsCount((prevState) => ({
      ...prevState,
      [newValue]: prevState[newValue] + 1, // Increment the count for the selected rating
    }));
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitFeedback = () => {
    alert("Thank you for your feedback!");
    setFeedback("");
    setRating(0);
  };

  const calculatePercentage = (count) => {
    if (totalRatings === 0) return 0;
    return (count / totalRatings) * 100;
  };

  const timeSlots = {
    am: [
      "06:00 - 07:00 ",
      "07:00 - 08:00 ",
      "08:00 - 09:00 ",
      "09:00 - 10:00 ",
      "10:00 - 11:00 ",
      "11:00 - 12:00 ",
    ],
    pm: [
      "12:00 - 01:00 ",
      "01:00 - 02:00 ",
      "02:00 - 03:00 ",
      "03:00 - 04:00 ",
      "04:00 - 05:00 ",
      "05:00 - 06:00 ",
      "06:00 - 07:00 ",
      "07:00 - 08:00 ",
      "08:00 - 09:00 ",
      "09:00 - 10:00 ",
    ],
  };

  const handlePeriodToggle = (period) => {
    setSelectedPeriod(period);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setSelectedTime(null);
  };

  // Animation variants for date cards
  const dateCardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    selected: { scale: 1.1, backgroundColor: "#6c757d", color: "#fff" },
  };

  const steps = ["Basic Details", "Services", "Time Slots", "Confirmation"];

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
          <>
            <div className="p-4">
              <p className="h4 text-black pb-4">
                Please, choose the service you want!
              </p>
              <motion.div className="tw-flex"
              style={{ cursor: "pointer" }}
              >
                <div
                  className={`px-2 cursor-pointer tw-text-2xl border ${
                    selectedService === "SWIMMING" ? " text-primary" : ""
                  }`}
                  onClick={() => handleServiceClick("SWIMMING")}
                  
                >
                  SWIMMING
                  <img src="/img/shape/swimm.jpg"
                       className=" tw-h-[250px] tw-w-[280px]"
                  />
                  
                </div>
                <div
                  className={` px-2 cursor-pointer tw-text-2xl border tw-ml-2 ${
                    selectedService === "FUTSAL" ? "text-primary" : ""
                  }`}
                  onClick={() => handleServiceClick("FUTSAL")}
                >
                  FUTSAL
                  <img src="/img/shape/footsaal.jpg "
                       className=" tw-h-[250px] tw-w-[280px]"
                  />
                </div>
              </motion.div>
            </div>
          </>
        );

      case 2:
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
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      <p className="mb-1">{day}</p>
                      <p>{dateNumber}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {selectedService === "FUTSAL" && (
              <div
                className=" card time-slot px-4 py-2"
                style={{
                  fontFamily: "Poppins",
                }}
              >
                <h3>Select Time</h3>
                <div className="mb-4 tw-space-x-2">
                  <button
                    className={`btn ${
                      selectedPeriod === "am" ? "btn-primary" : "btn-secondary"
                    }`}
                    onClick={() => handlePeriodToggle("am")}
                  >
                    AM
                  </button>
                  <button
                    className={`btn ${
                      selectedPeriod === "pm" ? "btn-primary" : "btn-secondary"
                    }`}
                    onClick={() => handlePeriodToggle("pm")}
                  >
                    PM
                  </button>
                </div>
                <div className="row mb-2">
                  {timeSlots[selectedPeriod].map((time, index) => {
                    const isSelected = selectedTime === time;
                    return (
                      <>
                        <div
                          className=" col-lg-2 col-md-3 col-sm-4 m-2 mb-0 mx-2 border tw-rounded-lg"
                          key={index}
                        >
                          <motion.div
                            className={`time-slot-card text-center ${
                              isSelected ? "bg-secondary text-light" : ""
                            }`}
                            onClick={() => handleTimeClick(time)}
                            style={{ cursor: "pointer" }}
                            variants={dateCardVariants}
                            initial="initial"
                            animate="animate"
                            whileHover="hover"
                            whileTap="selected"
                            transition={{ duration: 1.2, ease: "easeInOut" }}
                          >
                            <p>{time}</p>
                          </motion.div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            )}

            {selectedService === "SWIMMING" && selectedDate && (
              <div className="card p-4">
                <p className="h4 mb-4">Selected Date</p>
                <p>{selectedDate.toLocaleDateString()}</p>
              </div>
            )}
          </div>
        );

      case 3:
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
              <p>
                {" "}
                {selectedTime
                  ? selectedTime.toLocaleString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : "Select a time"}
              </p>
            </div>
            <div className="qr-code tw-bg-zinc-200 tw-rounded-lg tw-px-2 tw-py-2">
              <div className="tw-flex tw-flex-col tw-items-center ">
                <h3 className="tw-font-bold text-black">Make your Payment</h3>
                <p className="text-black">
                  Hello! Please scan the QR-Code to make payment.
                </p>
              </div>
              <div className="tw-flex tw-justify-center mb-2">
                <img
                  src="https://placehold.co/600x400"
                  className=" tw-w-[50%]"
                ></img>
              </div>
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
              <div className="rating-text tw-font-bold">
                <span>{rating ? `${rating}/5` : "No rating yet"}</span>
              </div>
              <div className="ratings-bar">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div
                    key={star}
                    className="rating-row"
                    style={{
                      fontFamily: "Poppins",
                    }}
                  >
                    <span className="tw-font-bold">{star}:</span>
                    <div
                      className="bar-container tw-rounded-lg"
                      style={{
                        width: `${calculatePercentage(ratingsCount[star])}%`,
                      }}
                    >
                      <div
                        className="bar"
                        style={{
                          width: `${calculatePercentage(ratingsCount[star])}%`,
                        }}
                      />
                    </div>
                    <span className="px-2">({ratingsCount[star]} Users)</span>
                  </div>
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
