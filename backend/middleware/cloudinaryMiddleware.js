import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export async function handleUpload(file) {
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
    folder: "ForestArena/Cover",
  });
  return res;
}

export const handleDelete = async (imageUrl) => {
  try {
    const match = imageUrl.match(/\/upload\/(?:v\d+\/)?(.+)\./);
    if (!match) throw new Error("Invalid image URL format");

    const publicId = match[1];

    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    console.error("Deletion failed:", error);
    throw error;
  }
};
