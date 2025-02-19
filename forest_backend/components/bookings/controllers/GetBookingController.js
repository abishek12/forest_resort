import { Booking } from "../model/BookingModel.js";

/**
 * @desc    Get all Booking
 * @route   GET /api/booking
 * @access  Public
 */
export const getAllBooking = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);
    let search = req.query.q || "";

    // Sorting
    let sort = req.query.sort || "desc";
    sort = { createdAt: sort === "asc" ? 1 : -1 };

    // searching
    let user = req.query.user;

    // Offset calculation
    let offset = (page - 1) * limit;

    let filter = {};
    if (req.query.status) {
      const allowedStatuses = [
        "pending",
        "confirmed",
        "cancelled",
        "completed",
      ];
      if (allowedStatuses.includes(req.query.status)) {
        filter.status = req.query.status;
      }
    }

    // Filter by user if provided
    if (req.query.user) {
      filter.user = req.query.user;
    }

    // filter by title
    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    let totalRecords = await Booking.countDocuments(filter);

    const items = await Booking.find(filter, { __v: 0 })
      .populate("user service", "fullname phone_no email name price -_id")
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

/**
 * @desc    Get service by slugs
 * @route   GET /api/services/:slugs
 * @access  Public
 */
export const getBooking = async (req, res) => {
  try {
    let item = await Booking.findById(req.params.slugs).populate(
      "user",
      "fullname phone_no email -_id"
    );

    if (!item) {
      return res.status(404).json({ message: "Booking not found" });
    }

    return res.status(200).json({
      message: "success",
      item,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
