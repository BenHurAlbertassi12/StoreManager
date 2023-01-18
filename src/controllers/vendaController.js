const serviceVendas = require('../services/serviceVendas');

// console.log('aqui o', serviceVendas);
const vendasController = {
  findAll: async (_req, res) => {
    await serviceVendas.solicitacao();
    res.status(200).json();
  },
  controllerCreate: async (req, res) => {
    const { id } = req.params;
    const response = await serviceVendas.vendasById(Number(id));

    if (response.message) {
      res.status(404).json(response);
    } else {
      res.status(200).json(response);
    }
    },
};

module.exports = vendasController;