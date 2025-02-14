import React, { useEffect, useState } from "react";
import "./Appointment.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  listAppointments,
  removeAppointment,
  createAppointment,
  updateAppointmentViewedStatus
} from "../../../../actions/appointmentActions";
import { APPOINTMENT_CREATE_RESET } from "../../../../constants/appointmentConstants";
import { Link, useNavigate } from 'react-router-dom';
import {
  MdEditSquare,
  MdOutlineDelete,
  MdOutlinePanoramaFishEye,
  MdPreview
} from "react-icons/md";
import { HiThumbUp } from 'react-icons/hi';

const TABLE_HEADS = [
  "Name",
  "Phone",
  "Email",
  "Service",
  "Date",
  "Childrens",
  "Adults",
  "Message",
  "Actions",
];

const Appointment = () => {
  const [local, setLocal] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const appointmentList = useSelector((state) => state.appointmentList);
  const { appointments } = appointmentList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const appointmentCreate = useSelector((state) => state.appointmentCreate);
  const {
    success: successCreate,
    appointment: createdAppointment,
  } = appointmentCreate;

  const appointmentDelete = useSelector((state) => state.appointmentDelete);
  const {
    success: successDelete,
  } = appointmentDelete;

  useEffect(() => {
    if (appointments) {
      setLocal(appointments.filter(appointment => appointment.viewed === "No"));
    }
  }, [appointments]);

  useEffect(() => {
    dispatch({ type: APPOINTMENT_CREATE_RESET });

    if (!userInfo || !userInfo.isAdmin) {
      navigate("/login");
    }

    if (successCreate) {
      navigate(`/admin/appointment/${createdAppointment._id}/create`);
    } else {
      dispatch(listAppointments());
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdAppointment,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(removeAppointment(id));
    }
  };

  const createAppointmentHandler = () => {
    dispatch(createAppointment());
  };

  // const [showDropdown, setShowDropdown] = useState(false);
  // const handleDropdown = () => {
  //   setShowDropdown(!showDropdown);
  // };

  // const dropdownRef = useRef(null);

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setShowDropdown(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const userDelete = useSelector((state) => state.userDelete);
  // const { success: successDelete } = userDelete;

  // const deleteHandler = (id) => {
  //   if (window.confirm("Are you sure")) {
  //     dispatch(deleteUser(id));
  //   }
  // };


  const filteredAppointments = appointments?.filter(appointment => appointment.viewed === "No");

  const viewedHandler = (id) => {
    dispatch(updateAppointmentViewedStatus(id, "Yes"));

    // Immediately update the local state
    setLocal(local.filter(appointment => appointment._id !== id));
  };

  return (
    <section className="content-area-table">
      <div className="data-table-info">
        <h4 className="data-table-title">Appointment Responses</h4>
      </div>
      <div className="data-table-diagram">
        <table>
          <thead>
            <tr>
              {TABLE_HEADS?.map((th, index) => (
                <th key={index}>{th}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {local?.map((appointment) => (
              // return (
              <tr key={appointment._id}>
                {/* <td>{appointment._id}</td> */}
                <td>{appointment.name}</td>
                <td>{appointment.phone}</td>
                <td>{appointment.email}</td>
                <td>{appointment.service}</td>
                <td>{appointment.startDate.split('G')[0]}</td>
                <td>{appointment.children}</td>
                <td>{appointment.adults}</td>
                <td>{appointment.message}</td>
                <td className="dt-cell-action">
                  <Link to={`/admin/appointment/${appointment._id}/view`}>
                    <MdPreview />
                  </Link>
                  <Link onClick={() => viewedHandler(appointment._id)}>
                    <HiThumbUp />
                  </Link>
                  {/* <Link onClick={() => deleteHandler(appointment._id)}>
                    <MdOutlineDelete />
                  </Link> */}
                </td>
              </tr>
            )
              // }
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Appointment;