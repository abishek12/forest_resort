import { Blog } from "../model/BlogModel.js";

export const listBlogs = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);

    // Sorting
    let sort = req.query.sort || "asc";
    let status = req.query.status || "draft";
    sort = { createdAt: sort === "asc" ? 1 : -1 };

    // Offset calculation
    let offset = (page - 1) * limit;

    let totalRecords = await Blog.countDocuments();

    const items = await Blog.find({  }, { __v: 0 })
      .populate("user category tags", "fullname -_id title")
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

    let item = await Blog.findById(post_id).populate(
      "user category tags",
      "fullname title -_id"
    );

    return res.status(200).json({
      message: "success",
      item,
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
