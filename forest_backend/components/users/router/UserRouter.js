import express from "express";

import { listAllUsers, userProfile } from "../controllers/GetUserController.js";
import { authMiddleware } from "../../../middleware/UserToken.js";
import { authorizeRole } from "../../../middleware/UserRole.js";

const route = express.Router();

route
  .get("/", authMiddleware, authorizeRole(["subscriber"]), listAllUsers)
  .get("/:userId", userProfile);

export default route;
