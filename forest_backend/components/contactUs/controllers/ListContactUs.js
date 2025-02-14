import { ContactUs } from "../model/ContactUsModel.js";

export const listContactUs = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);

    // Sorting
    let sort = req.query.sort || "asc";
    sort = { firstName: sort === "asc" ? 1 : -1 };

    // Offset calculation
    let offset = (page - 1) * limit;

    let filter = {};
    if (req.query.status) {
      const allowedStatuses = ["pending", "reviewed"];
      if (allowedStatuses.includes(req.query.status)) {
        filter.status = req.query.status;
      }
    }

    // Fetch total record count
    let totalRecords = await ContactUs.countDocuments();

    let items = await ContactUs.find(filter, { __v: 0 })
      .sort(sort)
      .skip(offset)
      .limit(limit);

    // Calculate towtal pages
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
