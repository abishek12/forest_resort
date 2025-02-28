import mongoose from "mongoose";
import slug from "slug";

import { Category } from "../model/CategoryModel.js";

export const updateCategoryController = async (req, res) => {
  try {
    let { catId } = req.params;
    let { title } = req.body;
    // let { id, role } = req.user;

    const item = await Category.findById(catId);

    // check category id found and display message if not found
    if (!item) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
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
    await Category.findOneAndUpdate(
      {
        _id: catId,
      },
      {
        title,
        slugs,
      },
      { new: true }
    );

    // user profile updated
    return res.status(200).json({
      status: 200,
      message: "Category updated Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error}`,
    });
  }
};
