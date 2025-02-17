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
      console.log("Service not found");
      return res.status(404).json({ message: "Service not found" });
    }

    // Check if the time slot is already booked
    let isBooked = await Booking.findOne({
      service: value.service,
      date: value.date,
      $or: [
        {
          "timeSlot.start": { $lt: value.timeSlot.end },
          "timeSlot.end": { $gt: value.timeSlot.start },
        },
      ],
    });

    if (isBooked) {
      console.log(
        `Booking created for service ${value.service} by user ${value.user}`
      );

      return res.status(400).json({ message: "Time slot already booked" });
    }

    // Create and save booking
    const booking = new Booking(value);
    await booking.save();

    return res.status(201).json({
      message: "success",
      booking_id: booking._id,
    });
  } catch (error) {
    console.log(`Server Error: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
