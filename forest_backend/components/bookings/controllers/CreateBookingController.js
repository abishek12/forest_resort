import { Booking } from "../model/BookingModel.js";
import { Service } from "../../services/model/ServiceModel.js";
import { bookingHelper } from "../helper/BookingHelper.js";
import mongoose from "mongoose";

export const createBooking = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log("Request Body: ", JSON.stringify(req.body));

    let { error, value } = await bookingHelper(req.body);
    if (error) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
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

    const requiresTimeSlot = service.requiresTimeSlot;

    if (requiresTimeSlot) {
      // If the service requires a time slot (e.g., futsal), proceed with checking time slot availability
      if (!value.timeSlot || !value.timeSlot.slot) {
        await session.abortTransaction();
        session.endSession();
        return res
          .status(400)
          .json({ message: "Time slot is required for this service" });
      }

      // Check if the time slot is already booked for futsal
      const isBooked = await Booking.findOne({
        service: value.service,
        date: value.date,
        "timeSlot.slot": value.timeSlot.slot, // Check for overlapping slots
      }).session(session);

      if (isBooked) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: "Time slot already booked" });
      }
    } else {
      // If the service does not require a time slot (e.g., swimming), remove timeSlot from the booking data
      delete value.timeSlot;
    }

    // Create booking
    const booking = new Booking(value);
    await booking.save({ session });

    await session.commitTransaction();
    session.endSession();

    return res
      .status(201)
      .json({ message: "success", booking_id: booking._id });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.log(error); // Log the error to debug
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
