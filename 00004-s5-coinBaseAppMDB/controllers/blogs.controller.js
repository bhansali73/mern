const BlogsModel = require("../models/blogs.model");

const createNewBlog = async (req, res) => {
    console.log(req.body);
    const { title, authors, content } = req.body;
    const newBlogDoc = new BlogsModel({ title, authors, content });
    const result = await newBlogDoc.save();
    res.json(result);
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogsModel.find({});
        res.json(blogs);
    } catch (error) {
        res.status(404).json({
            message: "Could Not Fetch Blogs from DB",
            error,
        });
    }
};

const deleteBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await BlogsModel.findOneAndDelete({ _id: id});
        res.json(result);
    } catch(error) {
        res.status(404).json({
            "message" : "Could not delete blog",
            error
        })
    }
}

const updateBlogsWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const filter = { _id: id }; // Conditions to find the document
        const update = req.body; // Updates to be performed
        const options = { new: true }; // Return the updated document
        const updatedBlog = await BlogsModel.findOneAndUpdate(filter, update, options);
        res.json(updatedBlog);
    } catch(error) {
        res.status(404).json({
            "message" : "Could not delete blog",
            error
        })
    }
}

module.exports = { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogsWithId };
