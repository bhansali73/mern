const BlogsModel = require("../models/blogs.model");

// const findAllBlogs = async () => {
//     const allBlogs = await BlogsModel.find({});
//     return allBlogs;
// };

// const createBlogDocument = async (blog) => {
//     const newBlogDoc = new BlogsModel(blog);
//     const result = await newBlogDoc.save();
//     return result;
// };

//const updateBlogsWithId = async (req, res) => {
    //     try {
    //         const { id } = req.params;
    //         const filter = { _id: id }; // Conditions to find the document
    //         const update = req.body; // Updates to be performed
    //         const options = { new: true }; // Return the updated document
    //         const updatedBlog = await BlogsModel.findOneAndUpdate(
    //             filter,
    //             update,
    //             options
    //         );
    //         res.json(updatedBlog);
    //     } catch (error) {
    //         res.status(404).json({
    //             message: "Could not delete blog",
    //             error,
    //         });
    //     }
    // };

//We are using the class BlogService to encapsulate the logic of creating a new blog and finding blogs into a single service to avoid having to export multiple services and importing them into the controller separately
//Service layer encapsulates and abstracts the business logic from rest of the application
class BlogService {
    findAllBlogs = async () => {
        const allBlogs = await BlogsModel.find();
        return allBlogs;
    };

    createBlogDocument = async (blog) => {
        const newBlogDoc = new BlogsModel(blog);
        const result = await newBlogDoc.save();
        return result;
    };
    
    findAndDeleteBlogWithId = async (id) => {
        const result = await BlogsModel.findOneAndDelete({ _id: id });
        return result;
    };

    findUpdateBlogWithId = async (id, updateData) => {
        const filter = { _id: id }; // Conditions to find the document
        const options = { new: true }; // Return the updated document
        const updatedBlog = await BlogsModel.findOneAndUpdate(
            filter,
            updateData,
            options
        );
        return updatedBlog;
    };

    findArticlesBySearchQuery = async (title, author) => {
        const result = await BlogsModel.find({
            $or: [{ title }, { author: { $elemMatch: { email: author } } }],
        });
        return result;
    }
}

//module.exports = { findAllBlogs, createBlogDocument };
module.exports = { BlogService };
