import express from "express";

import { registerUser } from "../controllers/RegisterController.js";
import { loginUser, refreshToken } from "../controllers/LoginController.js";
import {
  ForgotPassword,
  ResetPasswod,
} from "../controllers/ForgotPasswordController.js";
import { activateAccount } from "../controllers/ActivateAccount.js";

const route = express.Router();

route
  .post("/register", registerUser)
  .post("/forgot-password", ForgotPassword)
  .put("/reset-password", ResetPasswod)
  .put("/activate-account", activateAccount)
  .post("/login", loginUser)
  .post("/refresh-token", refreshToken);

export default route;
