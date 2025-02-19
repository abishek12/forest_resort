import { Booking } from "../model/BookingModel.js";

export const deleteBooking = async (req, res) => {
  try {
    let  booking_id = req.params.id;

    let items = await Booking.findById({
      _id: booking_id,
    });

    if (!items) {
      return res.status(404).json({
        status: 404,
        message: "Booking not found",
      });
    }

    await Booking.findOneAndDelete({
      _id: booking_id,
    });

    return res.status(204).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
