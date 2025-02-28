import slug from "slug";

import { Blog } from "../model/BlogModel.js";
import { blogValidator } from "../helper/BlogHelper.js";

export const updateBlogController = async (req, res) => {
  try {
    let post_id = req.params.id;

    // let { id, role } = req.user;

    let { error, value } = blogValidator(req.body);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    const item = await Blog.findById(post_id);

    // check category id found and display message if not found
    if (!item) {
      return res.status(404).json({
        status: 404,
        message: "Blogs not found",
      });
    }

    // const isAdmin = role["admin"] === true || role["super-admin"] === true;

    // if (id !== item.author._id && isAdmin === false) {
    //   return res.status(403).json({
    //     status: 403,
    //     message: "You are not authorized to update this Faculty",
    //   });
    // }

    if (item.title !== value.title) {
      item.slugs = slug(value.title);
    }

    // check the user id and update the value
    await Blog.findOneAndUpdate(
      {
        _id: post_id,
      },
      {
        ...value,
        slugs: item.slugs,
      },
      { new: true }
    );

    // user profile updated
    return res.status(200).json({
      message: "Blogs updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
