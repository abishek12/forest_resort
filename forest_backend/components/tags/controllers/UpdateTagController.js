import slug from "slug";

import { Tag } from "../model/TagModel.js";

export const updateTagController = async (req, res) => {
  try {
    let { cat_id } = req.params;
    let { title } = req.body;
    // let { id, role } = req.user;

    const item = await Tag.findById(cat_id);

    // check category id found and display message if not found
    if (!item) {
      return res.status(404).json({
        status: 404,
        message: "Tag not found",
      });
    }

    // const isAdmin = role["admin"] === true || role["super-admin"] === true;

    // if (id !== item.author._id && isAdmin === false) {
    //   return res.status(403).json({
    //     status: 403,
    //     message: "You are not authorized to update this Faculty",
    //   });
    // }

    let slugs = slug(title);

    // check the user id and update the value
    await Tag.findOneAndUpdate(
      {
        _id: cat_id,
      },
      {
        title,
        slugs,
      },
      { new: true }
    );

    // user profile updated
    return res.status(200).json({
      message: "Tag updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
