const conn = require('./connection');

const queryFind = `Select sp.sale_id, 
    sales.date, 
    sp.product_id, 
    sp.quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sp on sales.id = sp.sale_id;`;

const queryById = `Select sales.date, 
    sp.product_id, sp.quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS sp on sales.id = sp.sale_id
    WHERE sp.sale_id = ?`;

const vendasModel = {
  
  findAll: async () => {
    const executar = await conn.execute(queryFind);
    return executar[0];
  },
  
  findById: async (saleId) => {
    const executar = await conn.execute(queryById, [saleId]);
    return executar[0];
  },
};
module.exports = vendasModel;