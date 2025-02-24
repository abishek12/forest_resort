import { User } from "../../users/model/UserModel.js";
import {
  forgotPasswordHelper,
  resetPasswordHelper,
} from "../helper/AuthHelper.js";

/**
 *
 * @param {email, password} req
 * @route POST /api/auth/login
 * @access Public
 * @returns
 */

export const ForgotPassword = async (req, res) => {
  try {
    let { error, value } = forgotPasswordHelper(req.body);
    if (error) {
      return res.status(400).json({
        message: error,
      });
    }
    let user = await User.findOne({
      email: value.email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};

export const ResetPasswod = async (req, res) => {
  try {
    let { email } = req.query;
    let validation = {
      email,
      password: req.body.password,
    };
    let { error, value } = resetPasswordHelper(validation);

    if (error) {
      return res.status(400).json({
        message: error,
      });
    }

    let user = await User.findOne({
      email: value.email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    user.password = value.password;
    await user.save();

    return res.status(200).json({
      message: "Password reset successful",
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
