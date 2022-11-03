const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const { postController } = require('../controllers');

const router = express.Router();

router.post('/', validateToken, postController.registerNewPost);

router.get('/', validateToken, postController.getAllPosts);

router.get('/:id', validateToken, postController.getPostFromID);

module.exports = router;