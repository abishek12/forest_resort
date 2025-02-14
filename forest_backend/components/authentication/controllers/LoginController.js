import jwt from "jsonwebtoken";

import { User } from "../../users/model/UserModel.js";
import { loginHelper } from "../helper/AuthHelper.js";

/**
 * 
 * @param {email, password} req 
 * @route POST /api/auth/login
 * @access Public
 * @returns 
 */
export const loginUser = async (req, res) => {
  try {
    let { error, value } = loginHelper(req.body);

    if (error) {
      return res.status(400).json({
        message: error,
      });
    }

    let userData = await User.findOne({ email: value.email });

    if (!userData) {
      return res.status(404).json({
        message: "Account not found",
      });
    }

    // Compare password
    const isMatch = await userData.comparePassword(value.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // generate token
    const token = jwt.sign(
      { userId: userData._id, email: userData.email, roles: userData.roles },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    userData.token = token;
    await userData.save();

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
