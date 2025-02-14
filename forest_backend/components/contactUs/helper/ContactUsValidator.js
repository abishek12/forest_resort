import Joi from "joi";

export const contactUsValidator = (data) => {
  let schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    subject: Joi.string().required(),
    message: Joi.string().allow(""),
  });

  return schema.validate(data, { abortEarly: false });
};
