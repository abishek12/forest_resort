import { Booking } from "../model/BookingModel.js";
import { Service } from "../../services/model/ServiceModel.js";
import { bookingHelper } from "../helper/BookingHelper.js";

export const createBooking = async (req, res) => {
  try {
    let { error, value } = bookingHelper(req.body);

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    const service = await Service.findById(value.service);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    // Check if the time slot is already booked
    const isBooked = await Booking.findOne({
      service: value.service,
      date: value.date,
      "timeSlot.start": value.timeSlot.start,
      "timeSlot.end": value.timeSlot.end,
    });

    if (isBooked) {
      return res.status(400).json({ message: "Time slot already booked" });
    }

    // Create and save booking
    const booking = new Booking(value);
    await booking.save();

    return res.status(201).json({
      message: "success",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
