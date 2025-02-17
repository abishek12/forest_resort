import Joi from "joi";

export const bookingHelper = (data) => {
  let bookingSchema = Joi.object({
    service: Joi.string().required(),
    user: Joi.string().required(),
    date: Joi.date().iso().required(),
    timeSlot: Joi.object({
      start: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .required(),
      end: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .required(),
    })
      .required()
      .custom((value, helpers) => {
        let startTime = value.start;
        let endTime = value.end;
        if (startTime >= endTime) {
          return helpers.error("any.invalid", {
            message: "End time must be after start time",
          });
        }

        return value;
      }),
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
  });

  return bookingSchema.validate(data);
};
