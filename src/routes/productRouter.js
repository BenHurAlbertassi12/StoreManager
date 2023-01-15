const express = require('express');
const { controller } = require('../controllers');
// const { nameValidate } = require('../middlewares/produtos.valudator');

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.controllerGetById);
router.post('/', controller.controllerCreate);

module.exports = router;

// --- CHSD024 - MSC do zero --- ele cria a rota no tempo de video 27:24
// optei por colocalas dentro da pasta routes por uma questão de organização

// mantendo o video a cima, rotas criadas a partir do tempo de 28min 