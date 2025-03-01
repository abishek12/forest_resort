import express from "express";

// user controller
import { listOffers } from "../controllers/GetOffers.js";
import { createOffer } from "../controllers/CreateOffer.js";
import { deleteOffer } from "../controllers/DeleteOffer.js";
import { updateOfferController } from "../controllers/UpdateOffer.js";

// authorized middleware
// import { authenticateToken } from "../../../middleware/authenticateToken.js";
// import { authorizeRole } from "../../../middleware/authorize_role.js";

import { upload } from "../../../utils/MulterConfig.js";

const route = express.Router();

route
  .get("/", listOffers)
  .post("/", upload.single("featured_image"), createOffer)
  .delete("/:id/delete", deleteOffer)
  .put("/:id", upload.single("featured_image"), updateOfferController);

export default route;
