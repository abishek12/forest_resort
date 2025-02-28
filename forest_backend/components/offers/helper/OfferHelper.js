import Joi from "joi";

export const offerValidator = (data) => {
  let schema = Joi.object({
    title: Joi.string().required(),
    user: Joi.string().required(),
    featured_image: Joi.string().allow(""),
    status: Joi.string().default("draft"),
  });

  return schema.validate(data, { abortEarly: false });
};
