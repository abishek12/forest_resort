import { Booking } from "../model/BookingModel.js";

/**
 * @desc    Update a booking (Change status to "confirmed/completed")
 * @route   PUT /api/bookings/:id/status
 * @access  Public
 */
export const updateBookingStatus = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.status = req.body.status;
    await booking.save();

    return res.status(200).json({ message: "Booking updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Update a Payment (Change status to "paid/failed/refund")
 * @route   PUT /api/bookings/:id/status
 * @access  Public
 */
export const updatePaymentStatus = async (req, res) => {
    try {
      const booking = await Booking.findById(req.params.id);
  
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
  
      booking.payment.status = req.body.status;
      await booking.save();
  
      return res.status(200).json({ message: "Payment updated successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
