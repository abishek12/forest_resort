import crypto from "crypto";

import { User } from "../../users/model/UserModel.js";
import { registerHelper } from "../helper/AuthHelper.js";
import { sendEmail } from "../../../utils/NodemailerService.js";

/**
 *
 * @param {fullname, email, password, phone_no} req
 * @route POST /api/auth/register
 * @access Public
 * @returns
 */
export const registerUser = async (req, res) => {
  try {
    let { error, value } = registerHelper(req.body);

    if (error) {
      console.log(error.details[0].message);
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    // checking user exist or not
    let checkUserExistance = await User.findOne({ email: value.email });
    if (checkUserExistance) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const activationToken = crypto.randomBytes(20).toString("hex");
    const activationTokenExpires = Date.now() + 3600000;

    // Add activation token and expiry to the user data
    value.activationToken = activationToken;
    value.activationTokenExpires = activationTokenExpires;

    const newUser = new User(value);
    await newUser.save();

    const activationUrl = `https://forestsportsandrecreation.com/activate-account?token=${activationToken}`;
    sendEmail(
      value.email,
      "Account Activation",
      `Thank you for registering! Please click on the following link to activate your account:\n\n
           ${activationUrl}\n\n
           If you did not request this, please ignore this email.\n`
    );

    return res
      .status(201)
      .json({ message: "User registered successfully", activationToken });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: error,
    });
  }
};
