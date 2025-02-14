import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [255, "Title cannot exceed 100 characters"],
    },
    slugs: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Title must be at least 3 characters"],
      maxlength: [255, "Title cannot exceed 100 characters"],
    },
    category: {},
    tags: [],
    user: {},
    content: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.model("blogs", blogSchema);
