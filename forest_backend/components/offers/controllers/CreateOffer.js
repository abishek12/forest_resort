import slug from "slug";
import { v2 as cloudinary } from "cloudinary";

import { Offer } from "../model/OfferModel.js";
import { offerValidator } from "../helper/OfferHelper.js";

/**
 * @desc    Create Offer by
 * @route   POST /api/offer/
 * @access  Private
 */
export const createOffer = async (req, res) => {
  try {
    let { error, value } = offerValidator(req.body);
    let slugs = slug(value.title);

    if (error)
      return res.status(400).json({
        status: 400,
        message: error.details[0].message,
      });

    let featuredImageUrl = "";

    if (req.file) {
      // Convert the file buffer to a data URI
      const dataUri = `data:${
        req.file.mimetype
      };base64,${req.file.buffer.toString("base64")}`;

      // Upload the file to Cloudinary
      const result = await cloudinary.uploader.upload(dataUri, {
        folder: "offer-featured-images",
      });
      featuredImageUrl = result.secure_url; // Get the secure URL of the uploaded image
    }

    await Offer.create({
      ...value,
      slugs,
      featured_image: featuredImageUrl,
    });

    return res.status(201).json({
      message: "success",
    });
  } catch (error) {
    return res.status(500).json({
      message: `Error: ${error}`,
    });
  }
};
