const express = require('express');
const router = express.Router();
const controllerBanner = require('../controller/banner.controller');
const login = require('../middleware/login')

router.get('/', login, controllerBanner.getAll);
router.get('/:id', login, controllerBanner.getOne);
router.post('/', login , controllerBanner.post);
router.delete('/', login, controllerBanner.delete);
router.patch('/', login, controllerBanner.patch)

module.exports = router;