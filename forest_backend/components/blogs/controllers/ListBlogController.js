import { Blog } from "../model/BlogModel.js";

export const listBlogs = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);

    // Sorting
    let sort = req.query.sort || "asc";
    sort = { name: sort === "asc" ? 1 : -1 };

    // Offset calculation
    let offset = (page - 1) * limit;

    let totalRecords = await Blog.countDocuments();

    const items = await Blog.find({}, { _id: 0, __v: 0 })
      .sort(sort)
      .skip(offset)
      .limit(limit);

    // Calculate total pages
    let totalPages = Math.ceil(totalRecords / limit);

    return res.status(200).json({
      message: "success",
      items,
      pagination: {
        currentPage: page,
        totalPages,
        totalRecords,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const listSingleBlog = async (req, res) => {
  try {
    let post_id = req.params.id;

    if (!post_id) {
      return res.statu(400).json({
        message: "Blog Details is Required",
      });
    }

    let item = await Blog.findById(post_id);

    return res.status(200).json({
      message: "success",
      item,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
