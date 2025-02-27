import { Category } from "../model/CategoryModel.js";

export const deleteCategoryController = async (req, res) => {
  try {
    let { id: category_id } = req.params;

    // let { id, role } = req.user;
    // const isAdmin = role["admin"] === true || role["super-admin"] === true;

    let items = await Category.findById({
      _id: category_id,
    });

    if (!items) {
      return res.status(404).json({
        status: 404,
        message: "Category not found",
      });
    }

    // if (id !== items.author._id && isAdmin === false) {
    //   return res.status(403).json({
    //     status: 403,
    //     message: "You are not authorized to delete this tag",
    //   });
    // }

    await Category.findOneAndDelete({
      _id: category_id,
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
