import Joi from "joi";

export const bookingHelper = (data) => {
  let bookingSchema = Joi.object({
    service: Joi.string().required(),
    user: Joi.string().required(),
    date: Joi.date().iso().required(),
    timeSlot: Joi.object().allow(""),
    status: Joi.string()
      .valid("pending", "confirmed", "cancelled")
      .default("pending"),
    payment: Joi.object({
      reference: Joi.string().required(),
      amount: Joi.number().positive().required(),
      status: Joi.string()
        .valid("pending", "paid", "failed", "refunded")
        .required(),
    }).required(),
    persons: Joi.object({
      children: Joi.number().required(),
      adult: Joi.number().positive().required(),
    }).required(),
  });

  return bookingSchema.validate(data);
};
