const { solicitacao, vendasById } = require('../services/serviceVendas');

// console.log('aqui o', serviceVendas);
const vendasController = {
  findAll: async (_req, res) => {
    await solicitacao();
    res.status(200).json();
  },

  // controllerCreate: async (req, res) => {
  //   const { name } = req.body;

  //   const { type, message } = await vendasById(name);

  //   if (type) return res.status(201).json({ message });

  //   res.status(201).json(message);
  // },

  controllerById: async (req, res) => {
    const { id } = req.params;
    const response = await vendasById(id);

    if (response.message) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
  },
};

module.exports = vendasController;