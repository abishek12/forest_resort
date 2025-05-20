import { Booking } from "../model/BookingModel.js";
import { Service } from "../../services/model/ServiceModel.js";
import { bookingHelper } from "../helper/BookingHelper.js";
import { sendEmail } from "../../../utils/NodemailerService.js";
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

    // Populate the service and user details in one query
    const [service, user] = await Promise.all([
      Service.findById(value.service).session(session),
      mongoose.model('users').findById(value.user).session(session).select('email name')
    ]);

    if (!service) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Service not found" });
    }

    if (!user) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "User not found" });
    }

    const requiresTimeSlot = service.type === "futsal";
    const isPool = service.type === "pool";

    if (requiresTimeSlot) {
      if (!value.timeSlot || !value.timeSlot.slot) {
        await session.abortTransaction();
        session.endSession();
        return res
          .status(400)
          .json({ message: "Time slot is required for this service" });
      }

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

    // Prepare email content
    const emailContent = {
      to: user.email,
      subject: `Booking Confirmation - ${service.name}`,
      text: `Dear ${user.name},\n\nYour booking for ${service.name} on ${value.date} has been confirmed.`,
      html: `<p>Dear ${user.name},</p>
             <p>Your booking for <strong>${service.name}</strong> on <strong>${value.date}</strong> has been confirmed.</p>`
    };

    // Send email (fire and forget - don't wait for response)
    sendEmail(emailContent).catch(err => 
      console.error('Failed to send email:', err)
    );

    return res
      .status(201)
      .json({ message: "success", booking_id: booking._id });
      
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
