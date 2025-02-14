import express from "express";
const router = express.Router();
import {
  getAllAppointments,
  getAppointmentById,
  removeAppointment,
  createAppointment,
  updateAppointment,
  // createAppointmentReview,
  getTopAppointments,
  updateAppointmentViewedStatus
} from "../controllers/appointmentController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getAllAppointments).post(createAppointment);
// router.route("/:id/reviews").post(protect, createAppointmentReview);
router.get("/top", getTopAppointments);
router
  .route("/:id")
  .get(getAppointmentById)
  .delete(protect, admin, removeAppointment)
  .put(protect, admin, updateAppointment);

router.put("/:id/viewed", updateAppointmentViewedStatus);

export default router;
