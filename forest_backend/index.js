import express from "express";
import "dotenv/config";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";

import { logger } from "./utils/logger.js";
import { corsOptions } from "./utils/CorsOption.js";

/**
 * import user defined components
 */
import "./utils/DatabaseConfig.js";

// Replacing console.log with winston
console.log = (message) => {
  logger.info(message);
};

const PORT = process.env.PORT || 3000;

let app = express();

/**
 * use of middleware
 */
app.use(morgan("dev"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is Working" });
});

import router from "./routes/ApiRoute.js";
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is loading at: ${PORT}`);
});

process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  process.exit(0);
});
