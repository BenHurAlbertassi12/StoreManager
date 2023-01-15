const express = require('express');
const { produtos } = require('../controllers');
// const { nameValidate } = require('../middlewares/productsValidations');

const router = express.Router();

router.get('/', produtos.findAll);

// router.get('/:id', produtos.findAllById);

// router.post('/', nameValidate, produtos.createProduct);

// router.put('/:id', nameValidate, produtos.updateProduct);

// router.delete('/:id', produtos.delProduct);

module.exports = router;

// --- CHSD024 - MSC do zero --- ele cria a rota no tempo de video 27:24
// optei por colocalas dentro da pasta routes por uma questão de organização

// mantendo o video a cima, rotas criadas a partir do tempo de 28min 