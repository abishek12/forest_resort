import mongoose from "mongoose";

let categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slugs: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export let Category = mongoose.model("category", categorySchema, "category");
