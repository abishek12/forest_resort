import express from "express";

import {
  getAllServices,
  getService,
  getServiceTimeSlots,
} from "../controllers/GetServiceController.js";
import { createService } from "../controllers/CreateServiceController.js";

const route = express.Router();

route
  .get("/", getAllServices)
  .get("/:slugs", getService)
  .get("/timeslot/:id", getServiceTimeSlots)
  .post("/", createService);

export default route;
