import slug from "slug";
import { Blog } from "../model/BlogModel.js";

export const createBlog = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
