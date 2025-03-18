import mongoose from "mongoose";

const DB_URI = process.env.DB_URI;

export const connection = mongoose
  .connect(DB_URI)
  .then(() => console.log("Database Connection Established"))
  .catch((err) => {
    console.error("Database Connection Failed:", err);
    process.exit(1);
  });
