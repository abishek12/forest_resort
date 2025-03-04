const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5000",
  "http://localhost:5173",
  "http://localhost:5175",
  "http://localhost:8888",
  "http://backend.forestsportsandrecreation.com",
  "https://backend.forestsportsandrecreation.com",
  "http://forestsportsandrecreation.com",
  "https://forestsportsandrecreation.com",
  "https://forestsportsarena.netlify.app",
];

export const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  allowedHeaders: ["Content-Type", "Authorization"],
};
