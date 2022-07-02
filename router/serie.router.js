const express = require("express");
const router = express.Router();
const controllerSerie = require('../controller/serie.controller');
const login = require('../middleware/login');


router.get('/',login, controllerSerie.getAll);
router.get('/:id',login, controllerSerie.getOne);
router.post('/',login, controllerSerie.post);
router.patch('/',login, controllerSerie.patch);
router.delete('/:id',login, controllerSerie.delete);

module.exports = router;