import express from "express";

import {
  getAllServices,
  getService,
  getServiceTimeSlots,
} from "../controllers/GetServiceController.js";
import { updateService } from "../controllers/UpdateServiceController.js";
import { createService } from "../controllers/CreateServiceController.js";
import { deleteService } from "../controllers/DeleteServiceController.js";

const route = express.Router();

route
  .get("/", getAllServices)
  .get("/:slugs", getService)
  .get("/timeslot/:id", getServiceTimeSlots)
  .post("/", createService)
  .put("/:id", updateService)
  .delete("/:id", deleteService);

export default route;
