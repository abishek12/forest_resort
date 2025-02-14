import Joi from "joi";

export const blogHelper = (data) => {
  let schema = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    tags: Joi.array().required(),
    user: Joi.string().required(),
    featured_image: Joi.string().required(),
    content: Joi.string().required(),
    description: Joi.string().required(),
  });

  return schema.validate(data, { abortEarly: false });
};
