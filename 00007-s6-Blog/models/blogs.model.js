const mongoose = require("mongoose");
const validator = require('validator');

//Mongoose schema for author
const authorSchema = new mongoose.Schema(
    {
        fullName: { type: String, required: true, maxlength: 25 },
        twitterHandle: { type: String },
        //email: { type: String, required: true, maxlength: 50, validate: validator.isEmail },//also works
        email: { type: String, required: true, maxlength: 50, validate: (value)=>{
            return validator.isEmail(value);
        } },
        image: { type: String, validate: (value) => {
            return validator.isURL(value, {
                require_host: true,
                require_protocol: true,
            });
        } },
    },
    { _id: false }//False if we want to remove extra ObjectId _id that is inserted with each author
);

//Mongoose schema for blog
//This schema will also trigger an internal validator for data types
//It may also explicitly typecast values when storing it in DB
const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true, index: true }, // Title of the blog which is string
        author: [authorSchema], //Authors is an array of strings,
        content: { type: String, default: "" }, //Content is string
        publishedAt: { type: Date, default: null }, //PublishedAt is a date
    },
    { timestamps: true } //will add createdAt and updatedAt timestamps
);

//Create a model using the above schema to interact with the DB collection
const blogModel = mongoose.model("blogs", blogSchema, "WebsiteBlogs");

//Export this model
module.exports = blogModel;
