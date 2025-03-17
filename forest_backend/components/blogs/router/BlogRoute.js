import express from "express";

// user controller
import {
  listBlogs,
  listSingleBlog,
} from "../controllers/ListBlogController.js";
import { createBlog } from "../controllers/CreateBlogController.js";
import { deleteBlog } from "../controllers/DeleteBlogController.js";
import { updateBlogController } from "../controllers/UpdateBlogController.js";

// authorized middleware
import { authMiddleware } from "../../../middleware/UserToken.js";
import { authorizeRole } from "../../../middleware/UserRole.js";

import { upload } from "../../../utils/MulterConfig.js";

const route = express.Router();

route
  .get("/", listBlogs)
  .get("/:id", listSingleBlog)
  .post(
    "/",
    authMiddleware,
    // authorizeRole(["admin"]),
    upload.single("featured_image"),
    createBlog
  )
  .delete("/:id", authMiddleware, deleteBlog)
  .put("/:id", authMiddleware, authorizeRole(["admin"]), updateBlogController);

export default route;
