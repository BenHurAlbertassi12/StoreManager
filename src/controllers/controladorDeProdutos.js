const serviceProdutos = require('../services/serviceProdutos');

const getAll = async (req, res) => {
  const produtosController = await serviceProdutos.getAll();
  res.status(200).end(produtosController);
};

module.exports = {
  getAll,
};

// controller trabalha diretamente com a recepção e a resposta
// sua resposta sera responsavel por manupular request e response

// linhas 4 e 5:
// criado apartir da mentoria-- - CHSD024 - MSC do zero-- - tempo 14: 30