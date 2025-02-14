import express from "express";

import {
  getAllBooking,
  getBooking,
} from "../controllers/GetBookingController.js";
import { createBooking } from "../controllers/CreateBookingController.js";
import { cancelBooking } from "../controllers/CancelBookingController.js";

const route = express.Router();

route
  .get("/", getAllBooking)
  .get("/:slugs", getBooking)
  .post("/", createBooking)
  .patch("/:id/cancel", cancelBooking);

export default route;
