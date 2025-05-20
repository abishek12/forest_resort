import { Booking } from "../model/BookingModel.js";

/**
 * @desc    Update a booking (Change status to "confirmed/completed")
 * @route   PUT /api/bookings/:id/status
 * @access  Public
 */
export const updateBookingStatus = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const booking = await Booking.findById(req.params.id)
      .populate('user', 'email name')
      .populate('service', 'name')
      .session(session);

    if (!booking) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Booking not found" });
    }

    const previousStatus = booking.status;
    booking.status = req.body.status;
    
    await booking.save({ session });
    await session.commitTransaction();
    session.endSession();

    // Send email only if status changed to 'completed'
    if (req.body.status === 'completed' && previousStatus !== 'completed') {
      const emailContent = {
        to: booking.user.email,
        subject: `Booking Completed - ${booking.service.name}`,
        text: `Dear ${booking.user.name},\n\nYour booking for ${booking.service.name} has been marked as completed.\n\nBooking ID: ${booking._id}\nDate: ${booking.date}\nThank you for using our service!`,
        html: `<p>Dear ${booking.user.name},</p>
               <p>Your booking for <strong>${booking.service.name}</strong> has been marked as completed.</p>
               <p><strong>Booking ID:</strong> ${booking._id}</p>
               <p><strong>Date:</strong> ${booking.date}</p>
               <p>Thank you for using our service!</p>`
      };

      // Send email (fire and forget)
      sendEmail(emailContent).catch(err => 
        console.error('Failed to send booking completion email:', err)
      );
    }

    return res.status(200).json({ 
      message: "Booking status updated successfully",
      booking_id: booking._id,
      new_status: booking.status
    });
    
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error('Error updating booking status:', error);
    return res.status(500).json({ 
      message: "Internal Server Error",
      error: error.message 
    });
  }
};

/**
 * @desc    Update a Payment (Change status to "paid/failed/refund")
 * @route   PUT /api/bookings/:id/status
 * @access  Public
 */
export const updatePaymentStatus = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const booking = await Booking.findById(req.params.id)
      .populate("user", "email name")
      .populate("service", "name")
      .session(session);

    if (!booking) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Booking not found" });
    }

    const previousStatus = booking.payment.status;
    booking.payment.status = req.body.status;

    // If payment reference is provided in the request, update it
    if (req.body.reference) {
      booking.payment.reference = req.body.reference;
    }

    await booking.save({ session });
    await session.commitTransaction();
    session.endSession();

    // Send email only if status changed to 'paid'
    if (req.body.status === "paid" && previousStatus !== "paid") {
      const emailContent = {
        to: booking.user.email,
        subject: `Payment Confirmed - ${booking.service.name}`,
        text: `Dear ${booking.user.name},\n\nYour payment for booking ${
          booking._id
        } has been confirmed.\n\nService: ${booking.service.name}\nDate: ${
          booking.date
        }\nAmount: ${booking.payment.amount || "N/A"}`,
        html: `<p>Dear ${booking.user.name},</p>
               <p>Your payment for booking <strong>${
                 booking._id
               }</strong> has been confirmed.</p>
               <p><strong>Service:</strong> ${booking.service.name}</p>
               <p><strong>Date:</strong> ${booking.date}</p>
               <p><strong>Amount:</strong> ${
                 booking.payment.amount || "N/A"
               }</p>`,
      };

      // Send email (fire and forget)
      sendEmail(emailContent).catch((err) =>
        console.error("Failed to send payment confirmation email:", err)
      );
    }

    return res.status(200).json({
      message: "Payment updated successfully",
      booking_id: booking._id,
      new_status: booking.payment.status,
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    console.error("Error updating payment status:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
