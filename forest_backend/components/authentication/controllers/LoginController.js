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
    // Store refresh token in an HTTP-only cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res
      .status(200)
      .json({ message: "Login successful", accessToken, refreshToken });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};

/**
 *
 * @param {token}
 * @route POST /api/auth/refresh-token
 * @access Public
 * @returns
 */

export const refreshAccessToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(403).json({ message: "Refresh Token Required" });
    }

    console.log(refreshToken);

    // Awaiting the jwt.verify instead of using the callback
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH);

    let user = await User.findById(decoded.id);
    if (!user) {
      return res.status(403).json({ message: "User not found" });
    }

    // Generate new access token
    const accessToken = await tokenGenerator(user);

    return res.status(200).json({
      message: "success",
      token: accessToken,
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error.message}`, // Provide the error message directly
    });
  }
};
