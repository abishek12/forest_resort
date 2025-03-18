import Joi from "joi";

import { Service } from "../../services/model/ServiceModel.js";

export const bookingHelper = async (data) => {
  const service = await Service.findById(data.service);
  if (!service) {
    return { error: { details: [{ message: "Invalid service ID" }] } };
  }

  const requiresTimeSlot = service.requiresTimeSlot;

  let bookingSchema = Joi.object({
    service: Joi.string().required(),
    user: Joi.string().required(),
    date: Joi.date().iso().required(),
    timeSlot: requiresTimeSlot
      ? Joi.object({
          slot: Joi.string().required(),
          period: Joi.string().valid("AM", "PM").required(),
        }).required()
      : Joi.any(),
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
