const express = require('express');
const router = express.Router();
const controllerFilme = require('../controller/filme.controller');
const login = require("../middleware/login");

router.get('/', login, controllerFilme.getFilme);
router.get('/:id',login, controllerFilme.getOne);
router.post('/', login, controllerFilme.postFilme);
router.patch('/',login, controllerFilme.patchFilme);
router.delete('/',login, controllerFilme.deleteFilme);

module.exports = router