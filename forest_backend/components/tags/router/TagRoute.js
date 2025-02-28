import express from "express";

// user controller
import { getTagController } from "../controllers/GetTagController.js";
import { createTagController } from "../controllers/CreatTagController.js";
import { deleteTag } from "../controllers/DeleteTag.js";
import { updateTagController } from "../controllers/UpdateTagController.js";

// authorized middleware
// import { authenticateToken } from "../../../middleware/authenticateToken.js";
// import { authorizeRole } from "../../../middleware/authorize_role.js";

const route = express.Router();

route
  .get("/", getTagController)
  .post(
    "/",
    // authenticateToken,
    // authorizeRole(["super-admin", "admin", "editor"]),
    createTagController
  )
  .delete("/:tag_id", deleteTag)
  .put("/:cat_id", updateTagController);

export default route;
