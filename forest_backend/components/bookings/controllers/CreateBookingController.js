import { Booking } from "../model/BookingModel.js";
import { Service } from "../../services/model/ServiceModel.js";
import { bookingHelper } from "../helper/BookingHelper.js";
import mongoose from "mongoose";

const convertTo24HourFormat = (time) => {
  const match = time.match(/(\d+):(\d+)\s?(AM|PM)/i);
  if (!match) return time; // If already in 24-hour format, return as is

  let [_, hour, minute, period] = match;
  hour = parseInt(hour, 10);

  if (period.toUpperCase() === "PM" && hour !== 12) {
    hour += 12;
  } else if (period.toUpperCase() === "AM" && hour === 12) {
    hour = 0;
  }

  return `${hour.toString().padStart(2, "0")}:${minute}`;
};

export const createBooking = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let { error, value } = bookingHelper(req.body);

    if (error) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    // Prevent past date bookings
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (new Date(value.date) < today) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Cannot book for past dates" });
    }

    // Convert time to 24-hour format before saving
    value.timeSlot.start = convertTo24HourFormat(value.timeSlot.start);
    value.timeSlot.end = convertTo24HourFormat(value.timeSlot.end);

    const service = await Service.findById(value.service).session(session);
    if (!service) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Service not found" });
    }

    // Check for time slot conflicts
    const isBooked = await Booking.findOne({
      service: value.service,
      date: value.date,
      $or: [
        {
          "timeSlot.start": { $lt: value.timeSlot.end },
          "timeSlot.end": { $gt: value.timeSlot.start },
        },
      ],
    }).session(session);

    if (isBooked) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Time slot already booked" });
    }

    // Create and save booking
    const booking = new Booking(value);
    await booking.save({ session });

    await session.commitTransaction();
    session.endSession();

    console.log(
      `Booking created for service ${value.service} by user ${value.user}`
    );

    return res.status(201).json({
      message: "success",
      booking_id: booking._id,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(`Server Error: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
