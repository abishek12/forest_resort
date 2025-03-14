import mongoose from "mongoose";

import { Service } from "../../services/model/ServiceModel.js";

const bookingSchema = new mongoose.Schema(
  {
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "service",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    date: {
      type: Date, // Format: "YYYY-MM-DD"
      required: true,
    },
    timeSlot: {
      slot: {
        type: String,
        required: function () {
          return this._requiresTimeSlot; // Only required if the service needs a time slot
        },
      },
      period: {
        type: String,
        enum: ["AM", "PM"],
        required: function () {
          return this._requiresTimeSlot;
        },
      },
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    payment: {
      reference: { type: String },
      amount: { type: Number },
      status: {
        type: String,
        enum: ["pending", "paid", "failed", "refunded"],
        default: "pending",
      },
    },
    persons: {
      type: Object,
      default: {
        children: 0,
        adults: 1,
      },
    },
  },
  { timestamps: true }
);

bookingSchema.pre("validate", async function (next) {
  const service = await Service.findById(this.service);
  if (!service) {
    return next(new Error("Invalid service ID"));
  }

  this._requiresTimeSlot = service.requiresTimeSlot;

  if (service.requiresTimeSlot && !this.timeSlot?.slot) {
    return next(new Error("Time slot is required for this service"));
  }

  next();
});

export const Booking = mongoose.model("booking", bookingSchema);
