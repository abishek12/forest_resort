import { ContactUs } from "../model/ContactUsModel.js";

/**
 * @desc    Delete contact us by id
 * @route   DELETE /api/contact-us/
 * @access  Private
 */
export const deleteContact = async (req, res) => {
  try {
    let contact_id = req.params.id;

    let items = await ContactUs.findById({
      _id: contact_id,
    });

    if (!items) {
      return res.status(404).json({
        status: 404,
        message: "Contact not found",
      });
    }

    await ContactUs.findOneAndDelete({
      _id: contact_id,
    });

    return res.status(204).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
