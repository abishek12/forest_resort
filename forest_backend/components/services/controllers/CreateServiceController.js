import { Service } from "../model/ServiceModel.js";
import { serviceHelper } from "../helper/ServiceHelper.js";

/**
 * @desc    Create a new service
 * @route   POST /api/services
 * @access  Private
 */
export const createService = async (req, res) => {
  try {
    let { error, value } = serviceHelper(req.body);

    if (error) {
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }

    const service = new Service(value);
    await service.save();

    res.status(201).json({
      message: "success",
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
