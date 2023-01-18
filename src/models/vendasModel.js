const { conn } = require('./connection');

const queryFind = `Select sp.sale_id, sales.date, sp.product_id, sp.quantity
      FROM StoreManager.sales AS sales
      INNER JOIN StoreManager.sales_products AS sp on sales.id = sp.sale_id;`;

const queryById = `Select sales.date, sp.product_id, sp.quantity
      FROM StoreManager.sales AS sales
      INNER JOIN StoreManager.sales_products AS sp on sale.id = sp.sale_id
      WHERE sp.sale_id = ?`;

const vendasModel = {
  
findAll: async () => {
    const response = await conn.execute(queryFind);     
      return response[0];
  },
  
findById: async (id) => {
    const response = await conn.execute(queryById, [id]);
    return response[0];
  },
  };

module.exports = {
  vendasModel,
};