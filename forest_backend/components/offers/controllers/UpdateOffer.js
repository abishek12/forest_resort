import slug from "slug";
import { v2 as cloudinary } from "cloudinary";

import { Offer } from "../model/OfferModel.js";
import { offerValidator } from "../helper/OfferHelper.js";

export const updateOfferController = async (req, res) => {
  try {
    let offer_id = req.params.id;

    let { error, value } = offerValidator(req.body);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    const offer = await Offer.findById(offer_id);

    if (!offer) {
      return res.status(404).json({
        status: 404,
        message: "Offer not found",
      });
    }

    // If the title has changed, update the slug
    if (offer.title !== value.title) {
      value.slugs = slug(value.title);
    } else {
      value.slugs = offer.slugs;
    }

    let newImageUrl = offer.featured_image; // Keep existing image by default

    // Check if a new file is uploaded
    if (req.file) {
      // Delete previous image from Cloudinary
      if (offer.featured_image) {
        const publicId = offer.featured_image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(`offer-featured-images/${publicId}`);
      }

      // Convert new file buffer to data URI
      const dataUri = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

      const result = await cloudinary.uploader.upload(dataUri, {
        folder: "offer-featured-images",
      });

      newImageUrl = result.secure_url; 
    }

    await Offer.findByIdAndUpdate(
      offer_id,
      {
        ...value,
        featured_image: newImageUrl,
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Offer updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: `Error: ${error.message}`,
    });
  }
};
