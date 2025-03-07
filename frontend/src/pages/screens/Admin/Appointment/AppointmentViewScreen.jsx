import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { dateTimeFormat } from "../../../../utils/date-time";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { listAppointmentInfo } from "../../../../actions/appointmentActions";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentViewScreen = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [cancelError, setCancelError] = useState(null);
  const [cancelSuccess, setCancelSuccess] = useState(false);

  useEffect(() => {
    const fetchAppointmentDetails = async () => {
      try {
        setLoading(true);
        const data = await listAppointmentInfo(id);
        setAppointment(data.item);
        setLoading(false);
      } catch (err) {
        setError(err.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchAppointmentDetails();
  }, [id]);

  const handleCancelBooking = async () => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        setCancelLoading(true);
        setCancelError(null);
        setCancelSuccess(false);

        const response = await axios.patch(`booking/${id}/cancel`);

        if (response.status === 200) {
          setCancelSuccess(true);
          setAppointment((prev) => ({
            ...prev,
            payment: { ...prev.payment, status: "cancelled" },
          }));
          toast.success("Booking cancelled successfully!");
        } else {
          throw new Error("Failed to cancel booking");
        }
      } catch (err) {
        setCancelError(err.message || "An error occurred while canceling the booking");
        toast.error(err.message || "An error occurred while canceling the booking");
      } finally {
        setCancelLoading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <NavLink to="/admin/appointments" className="btn-bg mt-3 ml-5">
        Back
      </NavLink>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div style={{ marginBottom: "20px", marginTop: "40px" }}>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Personal Info</h3>
              <hr className="border border-secondary border-1 opacity-80 my-3" />
              <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <div className="col">
                  <h4>Name:</h4>
                  <p>{appointment.user.fullname}</p>
                </div>
                <div className="col">
                  <h4>Contact Number:</h4>
                  <p>{appointment.user.phone_no}</p>
                </div>
                <div className="col">
                  <h4>Email Address:</h4>
                  <p>{appointment.user.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Person Details Number */}
          <div className="card mt-4">
            <div className="card-body">
              <h3 className="card-title">Others</h3>
              <hr className="border border-secondary border-1 opacity-80 my-3" />
              <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                <div className="col">
                  <h4>Time Slot:</h4>
                  <p>
                    {appointment.timeSlot.start} - {appointment.timeSlot.end}
                  </p>
                </div>
                <div className="col">
                  <h4>Match Date:</h4>
                  <p> {dateTimeFormat(appointment.date)}</p>
                </div>
                <div className="col">
                  <h4>Adult:</h4>
                  <p>{appointment.persons.adult}</p>
                </div>
                <div className="col">
                  <h4>Children:</h4>
                  <p>{appointment.persons.children}</p>
                </div>
              </div>
            </div>
            <div className="card-footer">
              Count: {appointment.persons.children + appointment.persons.adult}
            </div>
          </div>

          {/* services and payment */}
          <div className="row row-cols-1 row-cols-lg-2 g-2 g-lg-3 mt-4">
            <div className="col-lg-4 col-xl-5 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Services</h3>
                  <hr className="border border-secondary border-1 opacity-80 my-3" />
                  <h4>Package:</h4>
                  <p>{appointment.service.name}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-xl-7 col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">Payment Status</h3>
                  <hr className="border border-secondary border-1 opacity-80 my-3" />
                  <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
                    <div className="col">
                      <h4>Transaction ID:</h4>
                      <p>{appointment.payment.reference}</p>
                    </div>
                    <div className="col">
                      <h4>Paid Amount:</h4>
                      <p>Rs. {appointment.payment.amount}</p>
                    </div>
                    <div className="col">
                      <h4>Due Amount:</h4>
                      <p>Rs. 700</p>
                    </div>
                    <div className="col">
                      <h4>Status</h4>
                      <p className="badge text-bg-secondary">
                        {appointment.payment.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cancel Booking Button */}
          {appointment.status !== "cancelled" && (
            <div className="mt-4 text-center">
              <button
                className="btn btn-danger"
                onClick={handleCancelBooking} 
                disabled={cancelLoading}
              >
                {cancelLoading ? "Cancelling..." : "Cancel Booking"}
              </button>
              {cancelError && (
                <Message variant="danger" className="mt-3">
                  {cancelError}
                </Message>
              )}
              {cancelSuccess && (
                <Message variant="success" className="mt-3">
                  Booking cancelled successfully!
                </Message>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AppointmentViewScreen;