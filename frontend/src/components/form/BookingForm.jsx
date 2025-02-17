import React, { useState } from "react";
import { toast } from "react-toastify";
import BoxReveal from "../ui/magic_ui/box-reveal";
import DatePicker from "react-datepicker";
import { IoMdArrowDropdown } from "react-icons/io";
import "react-datepicker/dist/react-datepicker.css";
import { createAppointment } from "../../actions/appointmentActions";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [date, setDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [time, setTime] = useState({ hour: "09", minute: "00", period: "AM" });

  const dispatch = useDispatch();

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleTimeChange = (e, type) => {
    const { name, value } = e.target;
    setTimeSlot((prevTimeSlot) => ({
      ...prevTimeSlot,
      [type]: { ...prevTimeSlot[type], [name]: value },
    }));
  };

  // Convert time to 24-hour format
  const get24HourTime = () => {
    const hour = parseInt(time.hour, 10);
    const minute = parseInt(time.minute, 10);
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

  // const adjustedDate = new Date(startDate.getTime() + date.getTimezoneOffset() * 20700);

  const handleForm = async (event) => {
    event.preventDefault();

    const { hour, minute, period } = time;
    const bookingDateTime = new Date(date);
    const { hour: adjustedHour, minute: adjustedMinute } = get24HourTime();

    bookingDateTime.setHours(adjustedHour, adjustedMinute, 0, 0);
    console.log("Booking Date and Time:", bookingDateTime);

    const startTime = `${String(adjustedHour).padStart(2, "0")}:${String(
      adjustedMinute
    ).padStart(2, "0")}`;
    const endTime = `${String(adjustedHour + 1).padStart(2, "0")}:${String(
      adjustedMinute
    ).padStart(2, "0")}`; // Assuming 1-hour time slots

    console.log("TIME:", time);

    const bookingData = {
      name,
      phone,
      email,
      message,
      service,
      adults,
      children,
      date: bookingDateTime,
      timeSlot: { start: startTime, end: endTime },
    };

    await dispatch(createAppointment(bookingData));

    toast.success("Thanks For Your Message");
  };

  return (
    <>
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
                  required
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="alert-error"></span>
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
                <span className="alert-error"></span>
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
                <span className="alert-error"></span>
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

                <span className="alert-error"></span>
              </div>
              <div className="form-group">
                <label>Time</label>
                <div className="time-inputs">
                  <select
                    name="hour"
                    value={time.hour}
                    onChange={handleTimeChange}
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
                    value={time.minute}
                    onChange={handleTimeChange}
                  >
                    {["00", "15", "30", "45"].map((minute) => (
                      <option key={minute} value={minute}>
                        {minute}
                      </option>
                    ))}
                  </select>
                  <select
                    name="period"
                    value={time.period}
                    onChange={handleTimeChange}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
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
              <label htmlFor="both">both</label>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="form-group comments">
                <textarea
                  className="form-control"
                  id="comments"
                  name="comments"
                  placeholder="Your message *"
                  autoComplete="off"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 ">
              <Button
                type="submit"
                name="submit"
                id="submit"
                // className="reserveBtns"
              >
                <i className="fa fa-paper-plane"></i> Reserve
              </Button>
            </div>
          </div>
          <div className="col-lg-12 alert-notification">
            <div id="message" className="alert-msg"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookingForm;
