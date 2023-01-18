const vendasModel = require('../models/vendasModel');

const serviceVendas = {
solicitacao: async () => {
    const vendas = await vendasModel.findAll();
    return vendas;
  },

  vendasById: async (id) => {
    const resposta = await vendasModel.findById(id);

    if (resposta.length === 0) return { message: 'Sale not found' };

    const vendas = await vendasModel.findById(id);

    return vendas;
  },
};
module.exports = serviceVendas;