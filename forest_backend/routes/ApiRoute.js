// import library function
import express from "express";

// instance for route of express
const router = express.Router();

import categoryRoute from "../components/category/router/CategoryRoute.js";
router.use("/category", categoryRoute);

import tagRoute from "../components/tags/router/TagRoute.js";
router.use("/tag", tagRoute);

import bookingRoute from "../components/bookings/router/BookingRouter.js";
router.use("/booking", bookingRoute);

import serviceRoute from "../components/services/router/ServiceRouter.js";
router.use("/services", serviceRoute);

import userRoute from "../components/users/router/UserRouter.js";
router.use("/users", userRoute);

import authRoute from "../components/authentication/router/AuthRoute.js";
router.use("/auth", authRoute);

export default router;
