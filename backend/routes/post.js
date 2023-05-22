const express = require('express')
const {getPosts, createPost, updatePost, deletePost} = require('../controllers/post');
const validator = require('../helpers/validator')


const router = express.Router();

router.get('/', getPosts);
router.post('/add',validator.createPostValidator, createPost);
router.put('/update/:id', updatePost);
router.delete('/delete/:id', deletePost);



 module.exports = router;