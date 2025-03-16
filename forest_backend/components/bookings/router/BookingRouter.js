import express from "express";

import {
  getAllBooking,
  getBooking,
  getUnavailableTimeSlots,
} from "../controllers/GetBookingController.js";
import { createBooking } from "../controllers/CreateBookingController.js";
import { cancelBooking } from "../controllers/CancelBookingController.js";
import {
  deleteBooking,
  deleteAllBoking,
} from "../controllers/DeleteBookingController.js";
import {
  updateBookingStatus,
  updatePaymentStatus,
} from "../controllers/UpdateBookingStatus.js";

const route = express.Router();

route
  .get("/", getAllBooking)
  .get("/unavailable-times", getUnavailableTimeSlots)
  .get("/:slugs", getBooking)
  .post("/", createBooking)
  .patch("/:id/cancel", cancelBooking)
  .put("/:id/status", updateBookingStatus)
  .put("/:id/payment-status", updatePaymentStatus)
  .delete("/:id/delete", deleteBooking)
  .delete("/deleteAll", deleteAllBoking);

export default route;
