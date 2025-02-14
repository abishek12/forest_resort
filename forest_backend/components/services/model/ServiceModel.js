import mongoose from "mongoose";

const availabilitySchema = new mongoose.Schema({
  days: {
    type: [String],
    default: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  times: {
    start: { type: String, default: "09:00" },
    end: { type: String, default: "21:00" },
  },
  address: { type: String },
  contact: { type: String },
});

const poolSchema = new mongoose.Schema({
  lanes: { type: Number },
  depth: { type: Number },
});

const futsalSchema = new mongoose.Schema({
  courtSize: { type: String },
  surfaceType: { type: String },
});

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    type: {
      type: String,
      enum: ["pool", "futsal", "other"],
      required: true,
    },
    pool: poolSchema,
    futsal: futsalSchema,
    price: {
      type: Number,
      required: true,
    },
    images: [{ type: String }],
    availability: {
      type: availabilitySchema,
      default: () => ({}), 
    },
  },
  { timestamps: true }
);

export const Service = mongoose.model("service", serviceSchema);
