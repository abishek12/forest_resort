import mongoose from "mongoose";

let tagSchema = new mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);

export let Tag = mongoose.model("tag", tagSchema, "tag");
