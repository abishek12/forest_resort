import { Booking } from "../model/BookingModel.js";
import { Service } from "../../services/model/ServiceModel.js";
import { bookingHelper } from "../helper/BookingHelper.js";
import mongoose from "mongoose";

export const createBooking = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    let { error, value } = bookingHelper(req.body);
    console.log(value);
    if (error) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Validation failed", errors: error.details.map((err) => err.message) });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(value.date) < today) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Cannot book for past dates" });
    }

    const service = await Service.findById(value.service).session(session);
    if (!service) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Service not found" });
    }

    const isBooked = await Booking.findOne({
      service: value.service,
      date: value.date,
      $or: [{ "timeSlot.start": { $lt: value.timeSlot.end }, "timeSlot.end": { $gt: value.timeSlot.start } }],
    }).session(session);

    if (isBooked) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Time slot already booked" });
    }

    const booking = new Booking(value);
    await booking.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({ message: "success", booking_id: booking._id });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
