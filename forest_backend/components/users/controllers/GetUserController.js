import { User } from "../../users/model/UserModel.js";

export const listAllUsers = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);

    // Sorting
    let sort = req.query.sort || "asc";
    sort = { name: sort === "asc" ? 1 : -1 };

    // Offset calculation
    let offset = (page - 1) * limit;
    
    let totalRecords = await User.countDocuments();

    const items = await User.find({}, { _id: 0, __v:0, token: 0, password:0 })
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
    res.status(500).json({ message: error });
  }
};
