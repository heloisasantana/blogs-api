const express = require('express');
const { validateToken } = require('../middlewares/validateToken');
const { userController } = require('../controllers');

const router = express.Router();

router.post('/', userController.registerNewUser);

router.get('/', validateToken, userController.getAllUsers);

module.exports = router;
