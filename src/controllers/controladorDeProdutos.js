const serviceProdutos = require('../services/serviceProdutos');

const getAll = async (req, res) => {
  const produtosController = await serviceProdutos.getAll();
  res.status(200).end(produtosController);
};

const create = async (req, res) => {
  try {
    const { name } = req.body;

    const novoProduto = await serviceProdutos.create({ name });
    res.status(201).json(novoProduto);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
  getAll,
  create,
};

// controller trabalha diretamente com a recepção e a resposta
// sua resposta sera responsavel por manupular request e response

// linhas 4 e 5:
// criado apartir da mentoria-- - CHSD024 - MSC do zero-- - tempo 14: 30

// linha create 36:14