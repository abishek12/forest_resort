import { Tag } from "../model/TagModel.js";

export const getTagController = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);

    // Sorting
    let sort = req.query.sort || "asc";
    sort = { title: sort === "asc" ? 1 : -1 };

    // Offset calculation
    let offset = (page - 1) * limit;

    // Fetch total record count
    let totalRecords = await Tag.countDocuments();

    let items = await Tag.find({}, { _id: 0, __v: 0 })
      .populate("author", "fullname")
      .sort(sort)
      .skip(offset)
      .limit(limit);

    // Calculate total pages
    let totalPages = Math.ceil(totalRecords / limit);

    return res.status(200).json({
      status: 200,
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
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
