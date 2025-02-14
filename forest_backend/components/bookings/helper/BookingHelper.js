import Joi from "joi";

export const bookingHelper = (data) => {
  let bookingSchema = Joi.object({
    service: Joi.string().required(),
    user: Joi.string().required(),
    date: Joi.string()
      .regex(/^\d{4}-\d{2}-\d{2}$/)
      .required(),
    timeSlot: Joi.object({
      start: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .required(),
      end: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .required(),
    }).required(),
    payment: Joi.object({
      reference: Joi.string().required(),
      amount: Joi.number().positive().required(),
      status: Joi.string().valid("pending", "paid", "failed").required(),
    }).required(),
  });

  return bookingSchema.validate(data);
};
