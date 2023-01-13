const modeloDeProdutos = require('../models');

const getAll = async () => {
  const produtos = modeloDeProdutos.getAll();
  return produtos;
};

module.exports = {
  getAll,
};

// arquivo criado apartir da mentoria --- CHSD024 - MSC do zero --- tempo 12:45