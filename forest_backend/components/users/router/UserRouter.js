import express from "express";

import { listAllUsers } from "../controllers/GetUserController.js";
// import { createBooking } from "../controllers/CreateBookingController.js";
// import { cancelBooking } from "../controllers/CancelBookingController.js";

const route = express.Router();

route.get("/", listAllUsers).get("/:slugs", listAllUsers);
//   .post("/", createBooking)
//   .patch("/:id/cancel", cancelBooking);

export default route;
