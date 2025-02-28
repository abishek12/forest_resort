import { Offer } from "../model/OfferModel.js";
import { v2 as cloudinary } from "cloudinary";

export const deleteOffer = async (req, res) => {
  try {
    let offer_id = req.params.id;

    // Find the blog by ID
    let offer = await Offer.findById(offer_id);

    if (!offer) {
      return res.status(404).json({
        status: 404,
        message: "Offer not found",
      });
    }

    if (offer.featured_image) {
      const publicId = offer.featured_image.split("/").pop().split(".")[0]; 
      await cloudinary.uploader.destroy(`offer-featured-images/${publicId}`);
    }

    // Delete the blog post from the database
    await Offer.findByIdAndDelete(offer_id);

    return res.status(200).json({
      status: 200,
      message: "Deleted Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error.message}`,
    });
  }
};
