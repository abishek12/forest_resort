import mongoose from "mongoose";

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
      start: {
        type: String,
        required: true,
      }, // 24-hour format validation
      end: {
        type: String,
        required: true,
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

bookingSchema.pre("save", function (next) {
  if (this.timeSlot.start >= this.timeSlot.end) {
    next(new Error("Start time must be before end time"));
  } else {
    next();
  }
});

export const Booking = mongoose.model("booking", bookingSchema);
