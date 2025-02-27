import { Blog } from "../model/BlogModel.js";
import { v2 as cloudinary } from "cloudinary";

export const deleteBlog = async (req, res) => {
  try {
    let blog_id = req.params.id;

    // Find the blog by ID
    let blog = await Blog.findById(blog_id);

    if (!blog) {
      return res.status(404).json({
        status: 404,
        message: "Blog not found",
      });
    }

    if (blog.featured_image) {
      const publicId = blog.featured_image.split("/").pop().split(".")[0]; 
      await cloudinary.uploader.destroy(`blog-featured-images/${publicId}`);
    }

    // Delete the blog post from the database
    await Blog.findByIdAndDelete(blog_id);

    return res.status(200).json({
      status: 200,
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error.message}`,
    });
  }
};
