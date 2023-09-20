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

const getUsersQueryErrors = (data) => {
    const result = schema.validate(data); //validate() function takes in the data and returns an object
    return result.error; //useful information about the data and the error it was subjected to
};

module.exports = {
    getUsersQueryErrors,
};
