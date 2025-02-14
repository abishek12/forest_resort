import express from "express";

import {
  getAllServices,
  getService,
} from "../controllers/GetServiceController.js";
import { createService } from "../controllers/CreateServiceController.js";

const route = express.Router();

route
  .get("/", getAllServices)
  .get("/:slugs", getService)
  .post("/", createService);

export default route;
