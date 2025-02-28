import { Tag } from "../model/TagModel.js";

export const deleteTag = async (req, res) => {
  try {
    let { tag_id } = req.params;

    let items = await Tag.findById({
      _id: tag_id,
    });

    if (!items) {
      return res.status(404).json({
        status: 404,
        message: "Tag not found",
      });
    }

    await Tag.findOneAndDelete({
      _id: tag_id,
    });

    return res.status(204).json({
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
