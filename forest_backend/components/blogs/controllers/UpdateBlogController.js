import slug from "slug";
import { v2 as cloudinary } from "cloudinary";

import { Blog } from "../model/BlogModel.js";
import { blogValidator } from "../helper/BlogHelper.js";

export const updateBlogController = async (req, res) => {
  try {
    let post_id = req.params.id;

    let { error, value } = blogValidator(req.body);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    const blog = await Blog.findById(post_id);

    if (!blog) {
      return res.status(404).json({
        status: 404,
        message: "Blog not found",
      });
    }

    // If the title has changed, update the slug
    if (blog.title !== value.title) {
      value.slugs = slug(value.title);
    } else {
      value.slugs = blog.slugs;
    }

    let newImageUrl = blog.featured_image; // Keep existing image by default

    // Check if a new file is uploaded
    if (req.file) {
      // Delete previous image from Cloudinary
      if (blog.featured_image) {
        const publicId = blog.featured_image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`blog-featured-images/${publicId}`);
      }

      // Convert new file buffer to data URI
      const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      const result = await cloudinary.uploader.upload(dataUri, {
        folder: "blog-featured-images",
      });

      newImageUrl = result.secure_url; 
    }

    await Blog.findByIdAndUpdate(
      post_id,
      {
        ...value,
        featured_image: newImageUrl,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Blog updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error.message}`,
    });
  }
};
