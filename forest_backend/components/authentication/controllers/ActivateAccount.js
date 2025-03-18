import { User } from "../../users/model/UserModel.js";

export const activateAccount = async (req, res) => {
  try {
    const { token } = req.body;

    const user = await User.findOne({
      activationToken: token,
      activationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        message: "Activation token is invalid or has expired",
      });
    }

    user.roles = {
      ...user.roles,
      subscriber: true,
    };
    user.activationToken = undefined;
    user.activationTokenExpires = undefined;
    await user.save();

    return res.status(200).json({
      message: "Account activated successfully",
    });
  } catch (error) {
    console.error(`Error: ${error}`);
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
