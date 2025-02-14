import { Blog } from "../model/BlogModel.js";

export const deleteBlog = async (req, res) => {
  try {
    let  blog_id = req.params.id;

    let items = await Blog.findById({
      _id: blog_id,
    });

    if (!items) {
      return res.status(404).json({
        status: 404,
        message: "Blog not found",
      });
    }

    await Blog.findOneAndDelete({
      _id: blog_id,
    });

    return res.status(204).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
