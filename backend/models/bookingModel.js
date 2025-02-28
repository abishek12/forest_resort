import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    isToday: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
