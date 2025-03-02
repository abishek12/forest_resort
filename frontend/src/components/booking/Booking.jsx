import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Replace Next.js useRouter with React Router's useNavigate
import BookingForm from "../form/BookingForm";
import BookingTime from "./BookingTime";

const Booking = () => {
  const [isQrVisible, setIsQrVisible] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  const handleLoginRedirect = () => {
    navigate("/login"); // Use navigate to redirect to the login page
  };

  if (!userInfo) {
    return (
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen">
        <div className="tw-bg-white tw-shadow-md tw-rounded-lg tw-p-6 tw-text-center">
          <h2 className="tw-text-xl tw-font-semibold tw-mb-4">Login Required</h2>
          <p className="tw-text-gray-600 tw-mb-4">
            You need to log in to book a time slot.
          </p>
          <button
            className="tw-bg-blue-500 tw-text-white tw-py-2 tw-px-4 tw-rounded tw-hover:bg-blue-700"
            onClick={handleLoginRedirect}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
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
  );
};

export default Booking;