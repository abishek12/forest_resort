import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    service: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      // required: true,
    },
    adults: {
      type: Number,
      // required: true,
    },
    children: {
      type: Number,
      // required: true,
    },
    message: {
      type: String,
    },
    startDate: {
      type: String,
    },
    viewed: {
      type: String,
      default: "No"
    }
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model("Appointment", appointmentSchema);

export default Appointment;
