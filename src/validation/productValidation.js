import Joi from "joi";


export let productValidation = Joi.object().keys({
    name: Joi.string().required().min(4).max(20)
    .message({
        "any.required": "name is required",
        "string.base":"field must be string",
    })
    .allow(""),
   price:Joi.number().required().min(100).max(200),
   quantity: Joi.number().required(),
   description:Joi.string().required(),
   productImage:Joi.string().required()
}).unknown(false);