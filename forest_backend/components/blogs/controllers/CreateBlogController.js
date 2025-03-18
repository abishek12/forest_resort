import slug from "slug";
import { v2 as cloudinary } from "cloudinary";

import { Blog } from "../model/BlogModel.js";
import { blogValidator } from "../helper/BlogHelper.js";

/**
 * @desc    Create blogs by
 * @route   POST /api/blog/
 * @access  Private
 */
export const createBlog = async (req, res) => {
  try {
    let { error, value } = blogValidator({
      ...req.body,
      tags:
        typeof req.body.tags === "string"
          ? JSON.parse(req.body.tags)
          : req.body.tags,
    });
    let slugs = slug(value.title);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    let featuredImageUrl = "";

    if (req.file) {
      // Convert the file buffer to a data URI
      const dataUri = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;

      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(dataUri, {
        folder: "blog-featured-images",
      });
      featuredImageUrl = result.secure_url; // Get the secure URL of the uploaded image
    }

    await Blog.create({
      ...value,
      slugs,
      featured_image: featuredImageUrl,
    });

    return res.status(201).json({
      status: 201,
      message: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
