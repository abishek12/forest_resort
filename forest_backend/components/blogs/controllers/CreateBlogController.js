import slug from "slug";

import { Blog } from "../model/BlogModel.js";
import { blogValidator } from "../helper/BlogHelper.js";

/**
 * @desc    Create blogs by
 * @route   POST /api/blog/
 * @access  Private
 */
export const createBlog = async (req, res) => {
  try {
    let { error, value } = blogValidator(req.body);

    let slugs = slug(value.title);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    await Blog.create({
      ...value,
      slugs,
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
