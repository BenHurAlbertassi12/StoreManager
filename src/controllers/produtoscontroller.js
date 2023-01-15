const { serviceProdutos } = require('../services');

  const findAll = async (_req, res) => {
    const { type, message } = await serviceProdutos.findAll();

    if (type) return res.status(404).json(message);

    res.status(200).json(message);
  };

module.exports = {
  findAll,
};

// controller trabalha diretamente com a recepção e a resposta
// sua resposta sera responsavel por manupular request e response

// linhas 4 e 5:
// criado apartir da mentoria-- - CHSD024 - MSC do zero-- - tempo 14: 30

// linha create 36:14