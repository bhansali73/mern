const BlogsModel = require("../models/blogs.model");
// const {
//     findAllBlogs,
//     createBlogDocument,
// } = require("../services/blogs.service");

const { BlogService } = require("../services/blogs.service");
const BlogServiceInstance = new BlogService();

// const createNewBlog = async (req, res) => {
//     console.log(req.body);

//     try {
//         const result = await createBlogDocument(req.body);
//         res.json({ result, message: "Blog Article created successfully" });
//     } catch (error) {
//         res.status(404).json({
//             message: "Could Not Create a New Blog Article",
//             error,
//         });
//     }
// };

const createNewBlog = async (req, res) => {
    console.log(req.body);

    try {
        const result = await BlogServiceInstance.createBlogDocument(req.body);
        res.json({ result, message: "Blog Article created successfully" });
    } catch (error) {
        res.status(404).json({
            message: "Could Not Create a New Blog Article",
            error,
        });
    }
};

// const getAllBlogs = async (req, res) => {
//     try {
//         const blogs = await findAllBlogs(); //service
//         res.json({ blogs, message: "Blogs fetched successfully" });
//     } catch (error) {
//         res.status(404).json({
//             message: "Could Not Fetch Blogs from DB",
//             error,
//         });
//     }
// };

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogServiceInstance.findAllBlogs(); //service
        res.json({ blogs, message: "Blogs fetched successfully" });
    } catch (error) {
        res.status(404).json({
            message: "Could Not Fetch Blogs from DB",
            error,
        });
    }
};

// const deleteBlogWithId = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await BlogsModel.findOneAndDelete({ _id: id });
//         res.json(result);
//     } catch (error) {
//         res.status(404).json({
//             message: "Could not delete blog",
//             error,
//         });
//     }
// };

const deleteBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await BlogServiceInstance.findAndDeleteBlogWithId(
            id
        );
        res.json(deletedBlog);
    } catch (error) {
        res.status(404).json({
            message: "Could not delete blog",
            error: error.message,
        });
    }
};

// const updateBlogsWithId = async (req, res) => {
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

const updateBlogWithId = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedBlog = await BlogServiceInstance.findUpdateBlogWithId(
            id,
            updateData
        );
        res.json(updatedBlog);
    } catch (error) {
        res.status(404).json({
            message: "Could not update blog",
            error: error.message,
        });
    }
};

// const getArticlesBySearchQuery = async (req, res) => {
//     const { title, author } = req.query;

//     try {
//         const result = await BlogsModel.find({
//             $or: [{ title }, { author: { $elemMatch: { email: author } } }],
//         });

//         if (result.length === 0) {
//             throw new Error("No article found");
//         }

//         res.json(result);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

const getArticlesBySearchQuery = async (req, res) => {
    const { title, author } = req.query;

    try {
        const result = await BlogServiceInstance.findArticlesBySearchQuery( title, author );

        if (result.length === 0) {
            throw new Error("No article found");
        }

        res.json(result);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

module.exports = {
    createNewBlog,
    getAllBlogs,
    deleteBlogWithId,
    updateBlogWithId,
    getArticlesBySearchQuery,
};
