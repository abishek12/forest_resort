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
  const [statusLoading, setStatusLoading] = useState(false);
  const [statusError, setStatusError] = useState(null);
  const [statusSuccess, setStatusSuccess] = useState(false);

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

  const handleStatusUpdate = async (newStatus) => {
    const statusMessages = {
      confirmed: "Are you sure you want to confirm this booking?",
      completed: "Are you sure you want to mark this booking as completed?",
      cancelled: "Are you sure you want to cancel this booking?",
    };

    if (window.confirm(statusMessages[newStatus])) {
      try {
        setStatusLoading(true);
        setStatusError(null);
        setStatusSuccess(false);

        const response = await axios.put(`booking/${id}/status`, {
          status: newStatus,
        });

        if (response.status === 200) {
          setStatusSuccess(true);
          setAppointment((prev) => ({
            ...prev,
            status: newStatus,
          }));
          toast.success(`Booking ${newStatus} successfully!`);
        } else {
          throw new Error(`Failed to update booking status to ${newStatus}`);
        }
      } catch (err) {
        setStatusError(err.message || `An error occurred while updating the booking status to ${newStatus}`);
        toast.error(err.message || `An error occurred while updating the booking status to ${newStatus}`);
      } finally {
        setStatusLoading(false);
      }
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <NavLink to="/user/booking" className="btn-bg mt-3 ml-5">
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
                      <p className={`badge text-bg-${appointment.status === "cancelled" ? "danger" : appointment.status === "confirmed" ? "success" : "secondary"}`}>
                        {appointment.payment.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Buttons for Status Updates */}
          <div className="mt-4 text-center">
            {appointment.status === "pending" && (
              <>
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleStatusUpdate("confirmed")}
                  disabled={statusLoading}
                >
                  {statusLoading ? "Confirming..." : "Confirm Booking"}
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleStatusUpdate("cancelled")}
                  disabled={statusLoading}
                >
                  {statusLoading ? "Cancelling..." : "Cancel Booking"}
                </button>
              </>
            )}

            {appointment.status === "confirmed" && (
              <button
                className="btn btn-primary"
                onClick={() => handleStatusUpdate("completed")}
                disabled={statusLoading}
              >
                {statusLoading ? "Completing..." : "Complete Booking"}
              </button>
            )}

            {statusError && (
              <Message variant="danger" className="mt-3">
                {statusError}
              </Message>
            )}
            {statusSuccess && (
              <Message variant="success" className="mt-3">
                Booking status updated successfully!
              </Message>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default AppointmentViewScreen;