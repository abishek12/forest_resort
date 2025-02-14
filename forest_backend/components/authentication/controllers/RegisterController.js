import { User } from "../../users/model/UserModel.js";
import { registerHelper } from "../helper/AuthHelper.js";

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
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    let checkUserExistance = await User.findOne({ email: value.email });
    if (checkUserExistance) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const newUser = new User(value);
    await newUser.save();

    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
