import { Service } from "../model/ServiceModel.js";
import { Booking } from "../../bookings/model/BookingModel.js";
import { generateTimeSlots } from "../helper/TimeSlotHelper.js";

/**
 * @desc    Get all services
 * @route   GET /api/services
 * @access  Public
 */
export const getAllServices = async (req, res) => {
  try {
    // Pagination parameters
    let limit = Math.max(Number(req.query.limit) || 10, 1);
    let page = Math.max(Number(req.query.page) || 1, 1);

    // Sorting
    let sort = req.query.sort || "asc";
    sort = { name: sort === "asc" ? 1 : -1 };

    // Offset calculation
    let offset = (page - 1) * limit;

    let totalRecords = await Service.countDocuments();

    const items = await Service.find({}, { __v: 0 })
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
export const getService = async (req, res) => {
  try {
    let item = await Service.findById(req.params.slugs);

    if (!item) {
      return res.status(404).json({ message: "Service not found" });
    }

    return res.status(200).json({
      message: "success",
      item,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getServiceTimeSlots = async (req, res) => {
  try {
    const { date, start, end } = req.query;
    if (!date || !start || !end)
      return res
        .status(400)
        .json({ error: "Date, start, and end times are required" });

    const service = await Service.findById(req.params.id);
    if (!service) return res.status(404).json({ error: "Service not found" });

    const allSlots = generateTimeSlots(start, end);

    // Check existing bookings for this service and date
    const bookings = await Booking.find({ service: service._id, date });

    const bookedSlots = bookings.map(
      (booking) => `${booking.timeSlot.start}-${booking.timeSlot.end}`
    );

    // Filter out booked slots
    const availableSlots = allSlots.filter(
      (slot) => !bookedSlots.includes(`${slot.start}-${slot.end}`)
    );

    return res
      .status(200)
      .json({ service: service.name, date, availableSlots });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
