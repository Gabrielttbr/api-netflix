const express = require('express');
const router = express.Router();
const controllerUser = require('../controller/user.controller');

router.post('/register', controllerUser.registerUsuario);
router.post('/login', controllerUser.loginUsuario);


module.exports = router;