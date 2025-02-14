import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../../../components/Message";
import Loader from "../../../../components/Loader";
import { listAppointmentInfo } from "../../../../actions/appointmentActions";

const AppointmentViewScreen = () => {
  const { id } = useParams();
  const appointmentId = id;

  const dispatch = useDispatch();

  const appointmentDetails = useSelector((state) => state.appointmentDetails);
  const { loading, error, appointment } = appointmentDetails;

  useEffect(() => {
    dispatch(listAppointmentInfo(appointmentId));
  }, [dispatch, appointmentId]);

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
        <div style={{ marginBottom: '20px', marginTop: '40px' }}>
          <h4>Name:</h4>
          <p>{appointment.name}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Phone:</h4>
          <p>{appointment.phone}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Email:</h4>
          <p>{appointment.email}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Service:</h4>
          <p>{appointment.service}</p>
          <hr />

          {/* <h4 style={{ marginTop: '10px' }}>Date:</h4>
          <p>{appointment.startDate.split('G')[0]}</p>
          <hr /> */}

          <h4 style={{ marginTop: '10px' }}>Children:</h4>
          <p>{appointment.children}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Adults:</h4>
          <p>{appointment.adults}</p>
          <hr />

          <h4 style={{ marginTop: '10px' }}>Message:</h4>
          <p>{appointment.message}</p>
          <hr />
        </div>
      )}
    </>
  );
};

export default AppointmentViewScreen;
