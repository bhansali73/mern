//Set schema in Joi validation
const Joi = require("joi");

//Joi has a function called keys() that takes in an object schema
// This validator can be moved to middleware/validators folder, see middleware/validators/users.validators.js and check how we validate the request for user routes in routes/users.routes.js
// Define Joi schema for validation
const schema = Joi.object()
    .keys({
        min_value: Joi.number().min(0),
        symbol: Joi.string()
            .max(3)
            .regex(/^[A-Za-z]+$/),
    })
    .or("min_value", "symbol")
    .required(); // Apply .or() after defining keys and add .required() to the schema itself

const getCurrenciesQueryErrors = (data) => {
    const result = schema.validate(data); //validate() function takes in the data and returns an object
    return result.error; //useful information about the data and the error it was subjected to
};

//Specifying that at least one of the keys should be present
//At least one of phone or email should be present
// const schema = Joi.object().keys({
//   phone: Joi.number(),
//   name: Joi.string(),
//   email: Joi.string(),
// }).or(“phone”, “email”)

module.exports = {
    getCurrenciesQueryErrors,
};
