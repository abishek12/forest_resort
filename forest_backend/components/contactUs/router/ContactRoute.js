import express from "express";

// user controller
import { listContactUs } from "../controllers/ListContactUs.js";
import { addContact } from "../controllers/AddContact.js";
import { deleteContact } from "../controllers/DeleteContact.js";
// import { updateCategoryController } from "../controllers/UpdateCategoryController.js";

// authorized middleware
// import { authenticateToken } from "../../../middleware/authenticateToken.js";
// import { authorizeRole } from "../../../middleware/authorize_role.js";

const route = express.Router();

route
  .get("/", listContactUs)
  .post(
    "/",
    // authenticateToken,
    // authorizeRole(["super-admin", "admin", "editor"]),
    addContact
  )
  .delete("/:id", deleteContact);
// .put("/:catId", updateCategoryController);

export default route;
