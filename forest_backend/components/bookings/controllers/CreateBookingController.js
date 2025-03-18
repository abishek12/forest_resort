import { Booking } from "../model/BookingModel.js";
import { Service } from "../../services/model/ServiceModel.js";
import { bookingHelper } from "../helper/BookingHelper.js";
import mongoose from "mongoose";

export const createBooking = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
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

    const requiresTimeSlot = service.type === "futsal"; // Only futsal requires time slot validation
    const isPool = service.type === "pool"; // Check if service is a swimming pool

    if (requiresTimeSlot) {
      if (!value.timeSlot || !value.timeSlot.slot) {
        await session.abortTransaction();
        session.endSession();
        return res
          .status(400)
          .json({ message: "Time slot is required for this service" });
      }

      // Check if the time slot is already booked (ONLY for futsal)
      const isBooked = await Booking.findOne({
        service: value.service,
        date: value.date,
        "timeSlot.slot": value.timeSlot.slot,
      }).session(session);

      if (isBooked) {
        await session.abortTransaction();
        session.endSession();
        return res.status(400).json({ message: "Time slot already booked" });
      }
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
