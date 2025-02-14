import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    authorbio: {
      type: String,
    },
    images: {
      type: [String],
      validate: [arrayLimit, "Blogs must have at least one image"],
    },
    category: {
      type: String,
      required: true,
      enum: ["swimming", "futsal", "news", "offer", "event", "other"],
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

function arrayLimit(val) {
  return val.length > 0;
}

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
