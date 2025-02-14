import express from "express";
const router = express.Router();
import {
  getAllBlogs,
  getBlogById,
  removeBlog,
  createBlog,
  updateBlog,
  // createBlogReview,
  getTopBlogs,
} from "../controllers/blogController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getAllBlogs).post(protect, admin, createBlog);
// router.route("/:id/reviews").post(protect, createBlogReview);
router.get("/top", getTopBlogs);
router
  .route("/:id")
  .get(getBlogById)
  .delete(protect, admin, removeBlog)
  .put(protect, admin, updateBlog);

export default router;
