import Joi from "joi";

export const serviceHelper = (data) => {
  let serviceSchema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    description: Joi.string().max(500).optional(),
    type: Joi.string().valid("pool", "futsal", "other").required(),

    pool: Joi.alternatives().conditional("type", {
      is: "pool",
      then: Joi.object({
        lanes: Joi.number().min(1).required(),
        depth: Joi.number().min(0).required(),
      }).required(),
      otherwise: Joi.forbidden(), // Disallow if not a pool
    }),

    futsal: Joi.alternatives().conditional("type", {
      is: "futsal",
      then: Joi.object({
        courtSize: Joi.string().required(),
        surfaceType: Joi.string().required(),
      }).required(),
      otherwise: Joi.forbidden(), // Disallow if not futsal
    }),

    requiresTimeSlot: Joi.boolean().default(false),

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
