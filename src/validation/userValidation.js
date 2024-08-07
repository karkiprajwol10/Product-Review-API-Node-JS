import Joi from "joi";

export let userValidation = Joi.object()
  .keys({
    name: Joi.string()
      .required()
      .min(4)
      .max(20)
      .message({
        "any.required": "name is required",
        "string.base": "field must be string",
      })
      .allow(""),
    email: Joi.string()
      .required()
      .custom((value, msg) => {
        let validEmail = value.match(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );
        if (validEmail) {
          return true;
        } else {
          return msg.message("email is not valid");
        }
      }),
     
    password: Joi.string()
      .required()
      .custom((value, msg) => {
        let validPassword = value.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        );
        if (validPassword) {
          return true;
        } else {
          return msg.message(
            "password must have at least one special character,one Uppercase,one number"
          );
        }
      }),
    phoneNumber: Joi.string()
      .required()
      .custom((value, msg) => {
        if (value.startsWith("97") || value.startsWith("98")) {
          return true;
        } else {
          return msg.message("phoneNumber is not valid");
        }
      }),
    gender: Joi.string().required().valid("male", "female", "other").messages({
      "string.base": "gender musst be string",
      "any.required": "gender must be required",
      "any.only": "gender must be either male or female or other",
    }),
  })
  .unknown(false);
