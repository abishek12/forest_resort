import Joi from "joi";

export const serviceHelper = (data) => {
  let serviceSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().max(500).optional(),
    type: Joi.string().valid("pool", "futsal", "other").required(),
    pool: Joi.object({
      lanes: Joi.number().min(1).optional(),
      depth: Joi.number().min(0).optional(),
    }).optional(),
    futsal: Joi.object({
      courtSize: Joi.string().optional(),
      surfaceType: Joi.string().optional(),
    }).optional(),
    price: Joi.number().min(0).required(),
    images: Joi.array().items(Joi.string().uri()).optional(),
    availability: Joi.object({
      days: Joi.array()
        .items(
          Joi.string().valid(
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          )
        )
        .default([
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ]),
      times: Joi.object({
        start: Joi.string()
          .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
          .default("09:00"),
        end: Joi.string()
          .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
          .default("21:00"),
      }),
      address: Joi.string().optional(),
      contact: Joi.string().optional(),
    }).optional(),
  });

  return serviceSchema.validate(data, { abortEarly: false });
};
