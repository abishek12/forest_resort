import { Service } from "../model/ServiceModel.js";
import { serviceHelper } from "../helper/ServiceHelper.js";

/**
 * @desc    Update an existing service
 * @route   PUT /api/services/:id
 * @access  Private
 */
export const updateService = async (req, res) => {
  try {
    // Validate the input data
    let { error, value } = serviceHelper(req.body);

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    const service = await Service.findById(req.params.id);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    Object.assign(service, value);

    await service.save();
    res.status(200).json({
      message: "Service updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
