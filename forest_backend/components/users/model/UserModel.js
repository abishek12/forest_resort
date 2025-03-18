import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "Full name must be at least 3 characters"],
      maxlength: [100, "Full name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    },
    phone_no: {
      type: String,
      required: [true, "Phone no. is required"],
      unique: true,
      match: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
    },
    password: {
      type: String,
      required: true,
      set: (password) => {
        const salt = bcrypt.genSaltSync(10);
        return bcrypt.hashSync(password, salt);
      },
      minlength: [8, "Password must be at least 8 characters"],
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    activationToken: {
      type: String,
      required: false,
    },
    activationTokenExpires: {
      type: Date,
      required: false,
    },
    token: {
      type: String,
      required: false,
    },
    roles: {
      type: Object,
      default: { subscriber: false },
    },
    pendingRoles: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

// this hook compare password during the process of login
userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password);
};

export const User = mongoose.model("users", userSchema);
