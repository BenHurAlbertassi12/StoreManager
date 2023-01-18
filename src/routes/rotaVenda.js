const express = require('express');
const { findAll, controllerCreate } = require('../controllers/vendaController');
// const { validator } = require('../middlewares/produtos.valudator');

const router = express.Router();

router.get('/', findAll);
router.get('/:id', controllerCreate);
// console.log('loooooooooooooog aqui', controller);

module.exports = router;

// --- CHSD024 - MSC do zero --- ele cria a rota no tempo de video 27:24
// optei por colocalas dentro da pasta routes por uma questão de organização

// mantendo o video a cima, rotas criadas a partir do tempo de 28min 