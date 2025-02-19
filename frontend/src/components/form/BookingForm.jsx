import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";

import BoxReveal from "../ui/magic_ui/box-reveal";
import { IoMdArrowDropdown } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";

const BookingForm = ({ setIsQrVisible }) => {
  // const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");

  const [transactionId, setTransactionId] = useState("");
  const [paidAmount, setPaidAmount] = useState("");

  const [showImage, setShowImage] = useState(false);
  const [showBookingBtn, setShowBookingBtn] = useState(false);

  const [loading, setLoading] = useState(false);

  const [startTime, setStartTime] = useState({
    hour: "09",
    minute: "00",
    period: "AM",
  });
  const [endTime, setEndTime] = useState({
    hour: "10",
    minute: "00",
    period: "AM",
  });

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handlePaymentClick = () => {
    setIsQrVisible(true);
    setShowImage(true);
    setTimeout(() => {
      setShowBookingBtn(true);
    }, 1000);
  };

  const handleTimeChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "start") {
      setStartTime((prev) => ({ ...prev, [name]: value }));
    } else {
      setEndTime((prev) => ({ ...prev, [name]: value }));
    }
  };

  const get24HourTime = (time) => {
    let hour = parseInt(time.hour, 10);
    const minute = time.minute;
    const period = time.period;

    let adjustedHour = hour;
    if (period === "PM" && hour !== 12) {
      adjustedHour += 12;
    }
    if (period === "AM" && hour === 12) {
      adjustedHour = 0;
    }

    return { hour: adjustedHour, minute };
  };

  const handleServiceChange = (event) => {
    setService(event.target.value);
  };

  const minTime = new Date();
  minTime.setHours(9, 0);

  const maxTime = new Date();
  maxTime.setHours(21, 0);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const increaseGuests = (type, event) => {
    event.preventDefault();
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    }
  };

  const decreaseGuests = (type, event) => {
    event.preventDefault();
    if (type === "adults" && adults > 1) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    }
  };

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!service) {
      toast.error("Please select a service.");
      setLoading(false);
      return;
  }

  if (!startTime.hour || !startTime.minute || !startTime.period) {
      toast.error("Please select a start time.");
      setLoading(false);
      return;
  }

  if (!endTime.hour || !endTime.minute || !endTime.period) {
      toast.error("Please select an end time.");
      setLoading(false);
      return;
  }

  if (!transactionId || !paidAmount) {
      toast.error("Please enter transaction details.");
      setLoading(false);
      return;
  }
    try {
      const startTimeFormatted = `${startTime.hour}:${startTime.minute}`;
      const endTimeFormatted = `${endTime.hour}:${endTime.minute}`;
      const bookingData = {
        service: "67a8af10655fb70f058f0f54",
        user: "67a890ae259d39cf93d0fc3b",
        date,
        timeSlot: {
        start: startTimeFormatted,
        end: endTimeFormatted
        },
        payment: {
          reference: transactionId,
          amount: paidAmount,
          status: "pending",
        },
      };

      console.log(startTime);
      console.log(endTime);

       const response = await axios.post("http://localhost:8888/api/booking", bookingData, {
        headers: {
          "Content-Type": "application/json"
        },
       });
       console.log(response.data);

      if (response.status === 201) {
        toast.success("Booking Successful!");
    } 
    else {
    toast.error("Unexpected response status:", response.status);
    }    
     
    } catch (error) {
      console.error("Booking failed:", error.response || error);
      toast.error("Booking failed! " + (error.response?.data?.message || error.message))
    }
    finally{
      setLoading(false);
    }

    const bookingDateTime = new Date(date);
    const { hour: startHour, minute: startMinute } = get24HourTime(startTime);
    const { hour: endHour, minute: endMinute } = get24HourTime(endTime);

    bookingDateTime.setHours(startHour, startMinute, 0, 0);
    const startTimeFormatted = `${String(startHour).padStart(2, "0")}:${String(
      startMinute
    ).padStart(2, "0")}`;
    const endTimeFormatted = `${String(endHour).padStart(2, "0")}:${String(
      endMinute
    ).padStart(2, "0")}`;

    setShowImage(false);
    setShowBookingBtn(false);
  };

  return (
    <div className="contact-form-style-one" id="Reserve">
      <h4 className="sub-title">
        <BoxReveal>Need relaxation?</BoxReveal>
      </h4>
      <h2 className="title">
        <BoxReveal>Reserve your spot Now</BoxReveal>
      </h2>
      <form className="contact-form" onSubmit={handleForm}>
        <div className="row">
          <div className="col-lg-12">
            <div className="form-group">
              <input
                className="form-control"
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                autoComplete="off"
                value="Ram Prasad Subedi"
                required
                readOnly
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control"
                id="email"
                name="email"
                placeholder="Email*"
                type="email"
                autoComplete="off"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <input
                className="form-control no-arrows"
                id="phone"
                name="phone"
                placeholder="Phone*"
                type="number"
                autoComplete="off"
                required
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <DatePicker
                selected={date}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                maxDate={
                  new Date(new Date().setDate(new Date().getDate() + 30))
                }
              />
            </div>

            <div className="form-group">
              <label className="tw-font-bold">TIME</label>
              <div className="time-inputs">
                <label>Start Time:</label>
                <div className="time-inputs">
                  <select
                    name="hour"
                    value={startTime.hour}
                    onChange={(e) => handleTimeChange(e, "start")}
                  >
                    {Array.from({ length: 12 }, (_, i) => {
                      const hour = i + 1;
                      return (
                        <option
                          key={hour}
                          value={hour.toString().padStart(2, "0")}
                        >
                          {hour.toString().padStart(2, "0")}
                        </option>
                      );
                    })}
                  </select>
                  <span>:</span>
                  <select
                    name="minute"
                    value={startTime.minute}
                    onChange={(e) => handleTimeChange(e, "start")}
                  >
                    {["00", "15", "30", "45"].map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <select
                    name="period"
                    value={startTime.period}
                    onChange={(e) => handleTimeChange(e, "start")}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>

                <label>End Time: </label>
                <div className="time-inputs">
                  <select
                    name="hour"
                    value={endTime.hour}
                    onChange={(e) => handleTimeChange(e, "end")}
                  >
                    {Array.from({ length: 12 }, (_, i) => {
                      const hour = i + 1;
                      return (
                        <option
                          key={hour}
                          value={hour.toString().padStart(2, "0")}
                        >
                          {hour.toString().padStart(2, "0")}
                        </option>
                      );
                    })}
                  </select>
                  <span>:</span>
                  <select
                    name="minute"
                    value={endTime.minute}
                    onChange={(e) => handleTimeChange(e, "end")}
                  >
                    {["00", "15", "30", "45"].map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <select
                    name="period"
                    value={endTime.period}
                    onChange={(e) => handleTimeChange(e, "end")}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div
              className="form-group tw-py-2 hover:tw-cursor-pointer tw-rounded-sm"
              style={{
                border: "2px solid black",
              }}
            >
              <div onClick={toggleDropdown}>
                <IoMdArrowDropdown className="tw-inline-block" size={20} />
                {adults} adults, {children} children
              </div>
              {isOpen && (
                <div className="tw-absolute tw-bg-green-200  tw-rounded-md tw-border tw-border-black tw-p-4 tw-w-[250px] tw-z-50">
                  <div className="tw-flex tw-items-center tw-justify-between tw-py-2">
                    <label htmlFor="Adults">Adults</label>
                    <div className="tw-flex tw-pb-1">
                      <button
                        className="reserveBtns"
                        onClick={(event) => decreaseGuests("adults", event)}
                      >
                        -
                      </button>
                      <span className="tw-px-4 tw-flex tw-place-items-center">
                        {adults}
                      </span>
                      <button
                        className="reserveBtns"
                        onClick={(event) => increaseGuests("adults", event)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="tw-flex tw-place-items-center tw-justify-between tw-py-2 ">
                    <label htmlFor="Children">Children</label>
                    <div className="tw-flex tw-pb-1">
                      <button
                        className="reserveBtns"
                        onClick={(event) => decreaseGuests("children", event)}
                      >
                        -
                      </button>
                      <span className="tw-px-4 tw-flex tw-place-items-center tw-text-center ">
                        {children}
                      </span>
                      <button
                        className="reserveBtns"
                        onClick={(event) => increaseGuests("children", event)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={closeDropdown}
                    className="reserveBtns tw-pt-2 tw-w-full "
                  >
                    Done
                  </button>
                </div>
              )}
              <span className="alert-error"></span>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 tw-pb-6">
          <div className="tw-flex tw-place-items-center tw-gap-2">
            <input
              type="radio"
              name="service"
              value="swimming"
              onChange={handleServiceChange}
            />
            <label htmlFor="swimming">Swimming Pool</label>
          </div>

          <div className="tw-flex tw-place-items-center tw-gap-2">
            <input
              type="radio"
              name="service"
              value="futsal"
              onChange={handleServiceChange}
            />
            <label htmlFor="futsal">Futsal</label>
          </div>

          <div className="tw-flex tw-place-items-center tw-gap-2">
            <input
              type="radio"
              name="service"
              value="both"
              onChange={handleServiceChange}
            />
            <label htmlFor="both">Both</label>
          </div>
        </div>

        {showBookingBtn ? (
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="transaction_id"
                  name="transaction_id"
                  placeholder="Transaction No.*"
                  type="text"
                  autoComplete="off"
                  required
                  onChange={(e) => setTransactionId(e.target.value)}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="form-group">
                <input
                  className="form-control no-arrows"
                  id="paid_amount"
                  name="paid_amount"
                  placeholder="Advance Paid Amount*"
                  type="number"
                  autoComplete="off"
                  required
                  onChange={(e) => setPaidAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="row">
          <div className="col-lg-12 tw-py-3">
            {!showBookingBtn ? (
              <Button type="button" onClick={handlePaymentClick}>
                <i className="fa fa-credit-card"></i> Payment
              </Button>
            ) : (
              <Button type="submit">
                <i className="fa fa-paper-plane"></i> Book
              </Button>
            )}
          </div>
          {showImage && (
            <div className="QR-image">
              <h4>Please, Scan QR Code to make Payment!</h4>
              <img src=" " />
            </div>
          )}
        </div>

        <div className="col-lg-12 alert-notification">
          <div id="message" className="alert-msg"></div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
