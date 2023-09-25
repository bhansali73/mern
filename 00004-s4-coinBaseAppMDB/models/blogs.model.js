const mongoose = require('mongoose');

//Mongoose schema for blog
//This schema will also trigger an internal validator for data types
//It may also explicitly typecast values when storing it in DB
const blogSchema = new mongoose.Schema({
    title: String, // Title of the blog which is string
    authors: [String], //Authors is an array of strings,
    content: String, //Content is string
    publishedAt: Date, //PublishedAt is a date
});

//Create a model using the above schema to interact with the DB collection
const blogModel = mongoose.model('blogs', blogSchema, 'WebsiteBlogs');

//Export this model
module.exports = blogModel;