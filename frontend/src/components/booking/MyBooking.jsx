import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../form/BookingForm";
import BookingTime from "./BookingTime";

export const ContextData = createContext(null);

const Booking = () => {
  const [isQrVisible, setIsQrVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [selectedDate, setSelectedDate] = useState({
    start: { hour: "00", minute: "00", period: "PM" },
    end: { hour: "00", minute: "00", period: "PM" },
  });

  const setSelectDateFunction = (startTime, endTime) => {
    const [startClock, startPeriod] = startTime.trim().split(/\s+/);
    const [startHour, startMinute] = startClock.split(":");
    const [endClock, endPeriod] = endTime.trim().split(/\s+/);
    const [endHour, endMinute] = endClock.split(":");

    setSelectedDate((prev) => ({
      ...prev,
      start: {
        ...prev.start,
        hour: startHour,
        minute: startMinute,
        period: startPeriod,
      },
      end: { ...prev.end, hour: endHour, minute: endMinute, period: endPeriod },
    }));
  };

  const contextValue = { selectedDate, setSelectDateFunction };
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  if (!userInfo) {
    return (
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-gray-50">
        <div className="tw-bg-white tw-shadow-lg tw-rounded-xl tw-p-8 tw-max-w-md tw-text-center tw-transition-all tw-hover:shadow-xl">
          {/* Illustration */}
          <img
            src="/img/booking/reserve.svg"
            alt="Booking Illustration"
            className="tw-w-72 tw-h-64 tw-mx-auto tw-mb-6"
          />

          {/* Message */}
          <h2 className="tw-text-2xl tw-font-bold tw-text-gray-800 tw-mb-3">
            To Book, Please Login
          </h2>
          <p className="tw-text-gray-600 tw-mb-6">
            You need to log in to book a time slot. Don't have an account? Sign
            up now!
          </p>

          {/* Login Button */}
          <button
            className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-6 tw-rounded-lg tw-font-semibold tw-transition-all tw-hover:bg-blue-600 tw-hover:shadow-md tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-blue-500 tw-focus:ring-offset-2"
            onClick={handleLoginRedirect}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <ContextData.Provider value={contextValue}>
      <div
        className="contact-area overflow-hidden default-padding"
        style={{ backgroundImage: "url(/img/shape/map.png)" }}
      >
        <div className="shape-right-bottom"></div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-8">
              <BookingForm setIsQrVisible={setIsQrVisible} />
            </div>
            <div className="col-tact-stye-one col-lg-3 offset-lg-1 mt--80 mt-xs-50">
              <BookingTime isQrVisible={isQrVisible} />
            </div>
          </div>
        </div>
      </div>
    </ContextData.Provider>
  );
};

export default Booking;
