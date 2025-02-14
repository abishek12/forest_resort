import asyncHandler from "express-async-handler";
import Blog from "../models/blogModel.js";
import mongoose from "mongoose";
import { handleDelete } from "../middleware/cloudinaryMiddleware.js";

// @desc    Fetch all Blogs
// @route   GET /api/Blogs
// @access  Public
const getAllBlogs = asyncHandler(async (req, res) => {
  const pageSize = 10;
  const page = Number(req.query.pageNumber) || 1;

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};

  // const count = await Blog.countDocuments({ ...keyword });
  const blogs = await Blog.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ blogs, page, pages: 10 });
  // res.json({ blogs, page, pages: Math.ceil(count / pageSize) });
});

// @desc    Fetch single Blog
// @route   GET /api/Blogs/:id
// @access  Public
const getBlogById = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    res.json(blog);
  } else {
    res.status(404);
    throw new Error("Blog not found");
  }
});

// @desc    Delete a Blog
// @route   DELETE /api/Blogs/:id
// @access  Private/Admin
const removeBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found");
  }

  const images = blog.images;

  // Delete images in the blog.images array
  if (images && images.length > 0) {
    await Promise.all(
      images.map(async (imageUrl) => {
        try {
          await handleDelete(imageUrl);
        } catch (error) {
          console.error(`Failed to delete image: ${imageUrl}`, error.message);
        }
      })
    );
  }

  // Extract and delete images from the blog description
  const description = blog.description;

  const imageUrlsInDescription =
    description.match(/<img[^>]+src="([^">]+)"/g) || [];

  await Promise.all(
    imageUrlsInDescription.map(async (imgTag) => {
      const urlMatch = imgTag.match(/src="([^">]+)"/);
      if (urlMatch && urlMatch[1]) {
        const imageUrl = urlMatch[1];
        try {
          await handleDelete(imageUrl);
        } catch (error) {
          console.error(
            `Failed to delete description image: ${imageUrl}`,
            error.message
          );
        }
      }
    })
  );

  await blog.remove();
  res.json({ message: "Blog and associated images removed successfully" });
});

// @desc    Create a Blog
// @route   POST /api/Blogs
// @access  Private/Admin
const createBlog = asyncHandler(async (req, res) => {
  const { title, author, authorbio, images, category, description } = req.body;

  if (!title || !author || !category || !description) {
    res.status(400);
    throw new Error("All fields are required.");
  }

  if (images && !Array.isArray(images)) {
    res.status(400);
    throw new Error("Images must be an array.");
  }

  const blog = new Blog({
    user: req.user._id,
    title,
    images: images || [],
    category,
    description,
    author,
    authorbio: authorbio || "N/A",
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// @desc    Update a Blog
// @route   PUT /api/Blogs/:id
// @access  Private/Admin
const updateBlog = asyncHandler(async (req, res) => {
  const { title, author, authorbio, images, category, description } = req.body;

  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400);
    throw new Error("Invalid blog ID.");
  }

  const blog = await Blog.findById(req.params.id);

  if (!blog) {
    res.status(404);
    throw new Error("Blog not found.");
  }

  blog.title = title || blog.title;
  blog.images = images && Array.isArray(images) ? images : blog.images;
  blog.author = author || blog.author;
  blog.authorbio = authorbio || blog.authorbio;
  blog.category = category || blog.category;
  blog.description = description || blog.description;

  const updatedBlog = await blog.save();
  res.json(updatedBlog);
});

// @desc    Get top rated Blogs
// @route   GET /api/Blogs/top
// @access  Public
const getTopBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find({}).sort({ rating: -1 }).limit(3);

  res.json(blogs);
});

export {
  getAllBlogs,
  getBlogById,
  removeBlog,
  createBlog,
  updateBlog,
  // createBlogReview,
  getTopBlogs,
};
