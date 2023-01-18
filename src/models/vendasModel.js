const conn = require('./connection');

const queryFind = `Select b.sale_id, 
    a.date, 
    b.product_id, 
    b.quantity
    FROM StoreManager.sales AS a
    INNER JOIN StoreManager.sales_products AS b on a.id = b.sale_id;`;

const queryById = `Select a.date, 
      b.product_id, 
      b.quantity
      FROM StoreManager.sales AS a
      INNER JOIN StoreManager.sales_products AS b 
      on a.id = b.sale_id
      WHERE b.sale_id = ?`;

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

module.exports = vendasModel;