import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";

import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { listAppointmentInfo } from "../../../../actions/appointmentActions";

const AppointmentViewScreen = () => {
  const { id } = useParams();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(appointment);

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

  return (
    <>
      <NavLink to="/admin/appointments" className="btn-bg mt-3 ml-5">
        Back
      </NavLink>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div style={{ marginBottom: "20px", marginTop: "40px" }}>
          <h4>Name:</h4>
          <p>{appointment.user.fullname}</p>
          <hr />

          <h4 style={{ marginTop: "10px" }}>Phone:</h4>
          <p>{appointment.user.phone_no}</p>
          <hr />

          <h4 style={{ marginTop: "10px" }}>Email:</h4>
          <p>{appointment.user.email}</p>
          <hr />

          <h4 style={{ marginTop: "10px" }}>Service:</h4>
          <p>jasdakjd ajd asd</p>
          <hr />

          <h4 style={{ marginTop: "10px" }}>Children:</h4>
          <p>jasdajdajsd</p>
          <hr />

          <h4 style={{ marginTop: "10px" }}>Adults:</h4>
          <p>ada dajdajd</p>
          <hr />

          <h4 style={{ marginTop: "10px" }}>Message:</h4>
          <p>jasdjadasjd</p>
          <hr />
        </div>
      )}
    </>
  );
};

export default AppointmentViewScreen;
