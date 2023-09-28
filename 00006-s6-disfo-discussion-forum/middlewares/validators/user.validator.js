const Joi = require("joi");

const schema = Joi.object().keys({
  fullName: Joi.string().required().max(50).default(""),
  username: Joi.string().required().max(25),
  email: Joi.string().required().email({ tlds: { allow: false } }),
});

const validateUserQuery = async (req, res, next) => {
  const validationResult = schema.validate(req.body);

  if(validationResult.error) {
    return res.status(400).json({ error: validationResult.error.details[0].message });
  } else {
    next();
  }
}

module.exports = validateUserQuery;