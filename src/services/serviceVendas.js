const vendasModel = require('../models/vendasModel');

const serviceVendas = {
solicitacao: async () => {
    const vendas = await vendasModel.findAll();
    return vendas;
  },

  vendasById: async (id) => {
    const vendaId = await vendasModel.findById(id);

    if (vendaId.length === 0) return { message: 'Sale not found' };

    const sales = await vendasModel.findById([id]);

    return sales;
  },
};
module.exports = serviceVendas;