const express = require('express');
const router = express.Router();

const blogController = require('@/controllers/BlogController');

router.get('/', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.post('/', blogController.createBlog);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);


module.exports = router;
