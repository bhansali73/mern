const router = require('express').Router();
const { createNewBlog, getAllBlogs, deleteBlogWithId, updateBlogsWithId } = require('../controllers/blogs.controller');

//CRUD
router.post('/new', createNewBlog); //CREATE
router.get('/new', getAllBlogs); //READ
router.patch('/:id', updateBlogsWithId); //UPDATE
router.delete('/:id', deleteBlogWithId); //DELETE

module.exports = router;