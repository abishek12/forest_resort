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
// import { authenticateToken } from "../../../middleware/authenticateToken.js";
// import { authorizeRole } from "../../../middleware/authorize_role.js";

const route = express.Router();

route
  .get("/", listBlogs)
  .get("/:id", listSingleBlog)
  .post("/", createBlog)
  .delete("/:id", deleteBlog)
  .put("/:id", updateBlogController);

export default route;
