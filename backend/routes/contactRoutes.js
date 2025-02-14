import express from "express";
const router = express.Router();
import {
  getAllContacts,
  getContactById,
  removeContact,
  createContact,
  updateContact,
  // createContactReview,
  getTopContacts,
  updateContactViewedStatus
} from "../controllers/contactController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getAllContacts).post(createContact);
// router.route("/:id/reviews").post(protect, createContactReview);
router.get("/top", getTopContacts);
router
  .route("/:id")
  .get(getContactById)
  .delete(protect, admin, removeContact)
  .put(protect, admin, updateContact);

router.put("/:id/viewed", updateContactViewedStatus);


export default router;
