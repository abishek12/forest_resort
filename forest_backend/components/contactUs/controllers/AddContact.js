import slug from "slug";

import { ContactUs } from "../model/ContactUsModel.js";
import { contactUsValidator } from "../helper/ContactUsValidator.js";

/**
 * @desc    Add Contact by site visitors or Users
 * @route   POST /api/contact-us/
 * @access  Public
 */
export const addContact = async (req, res) => {
  try {
    let { error, value } = contactUsValidator(req.body);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    let item = await ContactUs.findOne({
      email: value.email,
    });

    if (item) {
      return res.status(200).json({
        message: "Already Received your mail",
      });
    }

    await ContactUs.create(value);

    return res.status(201).json({
      status: 201,
      message: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
