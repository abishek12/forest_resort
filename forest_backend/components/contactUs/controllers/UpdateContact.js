import { ContactUs } from "../model/ContactUsModel.js";
/**
 * @desc    Update the status of a contact
 * @route   PUT /api/contact-us/:id
 * @access  Protected
 */
export const updateContactStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "reviewed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        status: 400,
        message: "Invalid status value",
      });
    }

    const contact = await ContactUs.findById(id);
    if (!contact) {
      return res.status(404).json({
        status: 404,
        message: "Contact not found",
      });
    }

    contact.status = status;

    // Save the updated contact
    await contact.save();

    return res.status(200).json({
      message: "Contact status updated successfully",
      contact,
    });
  } catch (error) {
    console.log(`Contact Update Error: ${error}`);
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};
