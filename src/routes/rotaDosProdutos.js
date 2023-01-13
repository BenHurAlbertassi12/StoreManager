require('dotenv').config();
const express = require('express');
const { controladorDeProdutos } = require('../controllers/controladorDeProdutos');

const rotas = express.Router();

rotas.get('/', controladorDeProdutos.getAll);
rotas.get('/:id', controladorDeProdutos.getAll);

// --- CHSD024 - MSC do zero --- ele cria a rota no tempo de video 27:24
// optei por colocalas dentro da pasta routes por uma questão de organização

// mantendo o video a cima, rotas criadas a partir do tempo de 28min 