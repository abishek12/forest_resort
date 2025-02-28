import express from "express";

import { registerUser } from "../controllers/RegisterController.js";
import { loginUser, refreshToken } from "../controllers/LoginController.js";

const route = express.Router();

route
  .post("/register", registerUser)
  .post("/login", loginUser)
  .post("/refresh-token", refreshToken);

export default route;
