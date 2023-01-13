const produtosModel = require('../models/produtosModel');

const getAll = async () => {
  const produtos = produtosModel.getAll();
  return produtos;
};

module.exports = {
  getAll,
};

// arquivo criado apartir da mentoria --- CHSD024 - MSC do zero --- tempo 12:45 e atualizado aproximadamente em 21:00