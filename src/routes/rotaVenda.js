const express = require('express');
const { controller } = require('../controllers/index.venda');
const { validator } = require('../middlewares/produtos.valudator');

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.controllerGetById);
router.post('/', validator, controller.controllerCreate);

module.exports = router;