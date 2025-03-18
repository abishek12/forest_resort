import express from "express";

import { listAllUsers, userProfile } from "../controllers/GetUserController.js";
import { deleteUser } from "../controllers/DeleteUserController.js";
import {
  updateProfile,
  updateRole,
} from "../controllers/ProfileUpdateController.js";
import { authMiddleware } from "../../../middleware/UserToken.js";
import { authorizeRole } from "../../../middleware/UserRole.js";

const route = express.Router();

route
  .get("/", listAllUsers)
  .get("/:userId", userProfile)
  .delete("/:id", deleteUser)
  .put("/:id/profile", updateProfile)
  .put("/:id/role", updateRole);

export default route;
