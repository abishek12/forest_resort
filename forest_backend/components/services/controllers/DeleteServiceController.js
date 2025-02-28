import { Service } from "../model/ServiceModel.js";

/**
 * @desc    Delete a service
 * @route   DELETE /api/services/:id
 * @access  Private
 */
export const deleteService = async (req, res) => {
  try {
    const deletedService = await Service.findByIdAndDelete(req.params.id);
    if (!deletedService) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
