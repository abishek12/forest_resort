import express from "express";

import { registerUser } from "../controllers/RegisterController.js";
import { loginUser } from "../controllers/LoginController.js";

const route = express.Router();

route.post("/register", registerUser);
route.post("/login", loginUser);

export default route;