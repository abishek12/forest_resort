import mongoose from "mongoose";

let contactUsSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    subject: {
      type: String,
      ref: "users",
      required: true,
    },
    message: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
      enum: ["pending", "reviewed"],
    },
  },
  {
    timestamps: true,
  }
);

export let ContactUs = mongoose.model(
  "contactUs",
  contactUsSchema,
  "contactUs"
);
