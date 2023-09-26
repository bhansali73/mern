//Set schema in Joi validation
const Joi = require("joi");

//Joi has a function called keys() that takes in an object schema
//Create schema for Age where Age should be a number and an integer between 0 and 100
const schema = Joi.object().keys({
    age: Joi.number().integer().min(0).max(100),
    gender: Joi.string().valid("male", "female"), //Define the valid options
});

//Specifying that at least one of the keys should be present
//At least one of phone or email should be present
// const schema = Joi.object().keys({
//   phone: Joi.number(),
//   name: Joi.string(),
//   email: Joi.string(),
// }).or(“phone”, “email”)

const validateSearchQuery = (req, res, next) => {

    const dataToValidate = req.query; // Assuming the data to validate is in the request query

    // Validate the request data using Joi schema
    const validationResult = schema.validate(dataToValidate);

    if (validationResult.error) {
        // If validation fails, respond with a 400 Bad Request status and the validation error
        return res
            .status(400)
            .json({ error: validationResult.error.details[0].message });
    }

    // If validation succeeds, proceed to the next middleware or route handler
    next();
};

module.exports = {
    validateSearchQuery,
};
