import { User } from "../model/UserModel.js";

export const deleteUser = async (req, res) => {
  try {
    let { id } = req.params;

    let user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
