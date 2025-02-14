import asyncHandler from "express-async-handler";
import Appointment from "../models/appointmentModel.js";

// @desc    Fetch all appointments
// @route   GET /api/appointments
// @access  Public
const getAllAppointments = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
      name: {
        $regex: req.query.keyword,
        $options: "i",
      },
    }
    : {};

  // const count = await appointment.countDocuments({ ...keyword });
  const appointments = await Appointment.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ appointments, page, pages: 10 });
  // res.json({ appointments, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single appointment
// @route   GET /api/appointments/:id
// @access  Public
const getAppointmentById = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    res.json(appointment);
  } else {
    res.status(404);
    throw new Error("appointment not found");
  }
});

// @desc    Delete a appointment
// @route   DELETE /api/appointments/:id
// @access  Private/Admin
const removeAppointment = asyncHandler(async (req, res) => {
  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    await appointment.remove();
    res.json({ message: "appointment removed" });
  } else {
    res.status(404);
    throw new Error("appointment not found");
  }
});

// @desc    Create a appointment
// @route   POST /api/appointments
// @access  Private/Admin
const createAppointment = asyncHandler(async (req, res) => {

  const { name, phone, email, startDate, children, adults, service, message } =
    req.body;

  const appointment = new Appointment({
    // user: req.user._id,
    name: name || "-",
    phone: phone || "-",
    email: email || "-",
    service: service || "-",
    message: message || "-",
    children: children || 0,
    adults: adults || 0,
    startDate: startDate || "-",
    // time: time || "-",
    // reason: reason || "-",
  });

  const createdAppointment = await appointment.save();
  res.status(201).json(createdAppointment);
});

// @desc    Update a appointment
// @route   PUT /api/appointments/:id
// @access  Private/Admin
const updateAppointment = asyncHandler(async (req, res) => {
  const { name, phone, email, startDate, children, adults, service, message } =
    req.body;

  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    appointment.name = name;
    appointment.phone = phone;
    appointment.service = service;
    appointment.email = email;
    appointment.children = children;
    appointment.adults = adults;
    appointment.startDate = startDate;
    appointment.message = message;

    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});


const updateAppointmentViewedStatus = asyncHandler(async (req, res) => {
  const { viewed } = req.body;

  const appointment = await Appointment.findById(req.params.id);

  if (appointment) {
    appointment.viewed = viewed;
    const updatedAppointment = await appointment.save();
    res.json(updatedAppointment);
  } else {
    res.status(404);
    throw new Error("Appointment not found");
  }
});

// @desc    Get top rated appointments
// @route   GET /api/appointments/top
// @access  Public
const getTopAppointments = asyncHandler(async (req, res) => {
  const appointments = await Appointment.find({}).sort({ rating: -1 }).limit(3);

  res.json(appointments);
});

export {
  getAllAppointments,
  getAppointmentById,
  removeAppointment,
  createAppointment,
  updateAppointment,
  // createAppointmentReview,
  getTopAppointments,
  updateAppointmentViewedStatus
};
