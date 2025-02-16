import jwt from "jsonwebtoken";

import { User } from "../../users/model/UserModel.js";
import { loginHelper } from "../helper/AuthHelper.js";
import { tokenGenerator } from "../helper/TokenGenerator.js";

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
    const accessToken = await tokenGenerator(userData);

    const refreshToken = await jwt.sign(
      {
        id: userData._id,
      },
      process.env.JWT_REFRESH,
      {
        expiresIn: "7d",
      }
    );

    userData.token = refreshToken;

    await userData.save();

    return res.status(200).json({ message: "Login successful", accessToken });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};

/**
 *
 * @param {token} req
 * @route POST /api/auth/refresh-token
 * @access Public
 * @returns
 */

export const refreshToken = async (req, res) => {
  try {
    let { token: refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(403).json({
        message: "Refresh Token Required",
      });
    }

    // verify the jwt token
    let decoded = null;
    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH);
    } catch (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }

    let user = await User.findById(decoded.userId);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: "Invalid Refresh Token" });
    }

    let accessToken = await tokenGenerator(user);

    return res.status(200).json({
      message: "success",
      token: accessToken,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
