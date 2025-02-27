import Joi from "joi";

export const blogValidator = (data) => {
  let schema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    user: Joi.string().required(),
    featured_image: Joi.string().allow(""),
    content: Joi.string().required().allow(""),
    description: Joi.string(),
  });

  return schema.validate(data, { abortEarly: false });
};
