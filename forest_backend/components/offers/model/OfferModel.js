import mongoose from "mongoose";

const offerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [255, "Title cannot exceed 100 characters"],
    },
    slugs: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [255, "Title cannot exceed 100 characters"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    featured_image: {
      type: String,
      required: true,
    },
    status:{
      type: String,
      required: false,
      default: "draft",
    }
  },
  { timestamps: true }
);

export const Offer = mongoose.model("offers", offerSchema);
