import Joi from "joi";

export let reviewValidation = Joi.object().keys({
    user: Joi.string().required(),
    product: Joi.string().required(),
    description: Joi.string().required()
}).unknown(false);