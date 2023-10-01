const router = require('express').Router();
//Validate API KEY
const verifyAPIKey = require("../middlewares/validators/verifyAPI.Key");
const { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogWithId, getArticlesBySearchQuery } = require('../controllers/blogs.controller');

//CRUD
router.post('/new', verifyAPIKey, createNewBlog); //CREATE
router.get('/new', getAllBlogs); //READ
router.patch('/:id', verifyAPIKey, updateBlogWithId); //UPDATE
router.delete('/:id', verifyAPIKey, deleteBlogWithId); //DELETE

//Search for an article based on the title or the author name
router.get('/search', getArticlesBySearchQuery);

module.exports = router;