import express from "express";
const router = express.Router();
import Service from '../models/serviceModel.js'; // Ensure correct model path

// Update service status
router.put('/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { isOpen } = req.body; // Expecting a boolean

        const service = await Service.findByIdAndUpdate(id, { isOpen }, { new: true });

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        res.status(200).json(service);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

export default router;
