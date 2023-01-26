const express = require('express');
const userController = require('../app/controllers/UserController');

const router = express.Router();

router.get('/all', userController.all);

module.exports = router;
