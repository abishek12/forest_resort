import express from "express";
const router = express.Router();
import Booking from "../models/bookingModel.js";

// create bookings
router.post("/", async (req, res) => {
  try {
    const bookingsData = req.body;

    if (!Array.isArray(bookingsData)) {
      return res
        .status(400)
        .json({ message: "Invalid data format. Expected an array." });
    }

    const bookingPromises = bookingsData.map(async (bookingData) => {
      const { time, isBooked, isToday } = bookingData;
      const booking = new Booking({ time, isBooked, isToday });
      return booking.save();
    });

    const bookings = await Promise.all(bookingPromises);

    res.status(201).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.put("/:id/status", async (req, res) => {
  try {
    const { id } = req.params;
    const { isBooked } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      id,
      { isBooked },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// delete all bookings
router.delete("/all", async (req, res) => {
  try {
    await Booking.deleteMany({});
    res.status(200).json({ message: "All bookings have been deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

export default router;
