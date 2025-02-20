import Joi from "joi";

export const loginHelper = (data) => {
  let schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  return schema.validate(data, { abortEarly: false });
};

export const registerHelper = (data) => {
  // let item = xss(data);
  let schema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .required()
      .min(8)
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    phone_no: Joi.string()
      .required()
      .regex(/^\+?[0-9\s-()]+$/, "Invalid phone number format"),
    roles: Joi.object().default({ subscriber: false }),
  });

  return schema.validate(data, { abortEarly: false });
};
