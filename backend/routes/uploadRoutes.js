import express from "express";
import multer from "multer";
import path from "path";
import { handleUpload } from "../middleware/cloudinaryMiddleware.js";

const router = express.Router();

const storage = new multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png/;
  const extname = allowedTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Image type not allowed!"));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter,
});

router.post("/", upload.array("images", 5), async (req, res) => {
  try {
    if (req.files.length > 5) {
      return res
        .status(400)
        .json({ message: "You can upload a maximum of 5 images." });
    }

    const urls = await Promise.all(
      req.files.map((file) => {
        const b64 = Buffer.from(file.buffer).toString("base64");
        const dataURI = `data:${file.mimetype};base64,${b64}`;
        return handleUpload(dataURI);
      })
    );
    res.status(200).json(urls.map((cldRes) => cldRes.secure_url));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
