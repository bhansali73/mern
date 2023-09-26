const mongoose = require("mongoose");

//Mongoose schema for blog
//This schema will also trigger an internal validator for data types
//It may also explicitly typecast values when storing it in DB
const blogSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, unique: true, index: true }, // Title of the blog which is string
        authors: { type: [String] }, //Authors is an array of strings,
        content: { type: String, default: "" }, //Content is string
        publishedAt: { type: Date, default: null }, //PublishedAt is a date
    },
    { timestamps: true } //will add createdAt and updatedAt timestamps
);

//Create a model using the above schema to interact with the DB collection
const blogModel = mongoose.model("blogs", blogSchema, "WebsiteBlogs");

//Export this model
module.exports = blogModel;
