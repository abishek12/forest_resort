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
  .get("/", authMiddleware, authorizeRole(["admin"]), listAllUsers)
  .get("/:userId", authMiddleware, userProfile)
  .delete("/:id", authMiddleware, authorizeRole(["admin"]), deleteUser)
  .put("/:id/profile", updateProfile)
  .put("/:id/role", authMiddleware, authorizeRole(["admin"]), updateRole);

export default route;
