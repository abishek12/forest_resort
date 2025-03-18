import bcrypt from "bcryptjs";

import { User } from "../model/UserModel.js";

export const updateProfile = async (req, res) => {
  try {
    let { id: userId } = req.params;
    let { fullname, phone_no, password } = req.body;

    let item = await User.findById(userId, { __v: 0, token: 0 });

    if (!item) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (fullname) item.fullname = fullname;
    if (phone_no) item.phone_no = phone_no;

    if (password) {
      const salt = await bcrypt.genSalt(10);
      item.password = await bcrypt.hash(password, salt);
    }
    await item.save();

    return res.status(200).json({
      message: "success",
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateRole = async (req, res) => {
  try {
    let { id: userId } = req.params;
    let { role } = req.body;

    if (role !== "admin") {
      return res.status(400).json({
        message: "Invalid role. Only 'admin' role can be added.",
      });
    }

    let item = await User.findById(userId, { __v: 0, token: 0 });

    if (!item) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!item.roles) {
      item.roles = {};
    }
    item.roles[role] = true;
    item.markModified("roles");

    await item.save();

    return res.status(200).json({
      message: "Role updated successfully",
    });
  } catch (error) {
    console.error("Error updating role:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
