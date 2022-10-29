const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const { categoryController } = require('../controllers');

const router = express.Router();

router.post('/', validateToken, categoryController.registerNewCategory);

router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;
