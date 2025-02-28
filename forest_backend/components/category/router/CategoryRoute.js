import express from "express";

// user controller
import { getCategoryController } from "../controllers/GetCategoryController.js";
import { createCategoryController } from "../controllers/CreateCategoryController.js";
import { deleteCategoryController } from "../controllers/DeleteCategory.js";
import { updateCategoryController } from "../controllers/UpdateCategoryController.js";

// authorized middleware
// import { authenticateToken } from "../../../middleware/authenticateToken.js";
// import { authorizeRole } from "../../../middleware/authorize_role.js";

const route = express.Router();

route
  .get("/", getCategoryController)
  .post(
    "/",
    // authenticateToken,
    // authorizeRole(["super-admin", "admin", "editor"]),
    createCategoryController
  )
  .delete("/:id", deleteCategoryController)
  .put("/:catId", updateCategoryController);

export default route;
