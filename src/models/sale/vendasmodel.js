const conn = require('../connection');

const getAll = async () => {
  const result = await conn.execute(
    `Select si.sale_id, da.date, si.product_id, si.quantity
    FROM StoreManager.sales AS a
    INNER JOIN StoreManager.sales_products AS si on da.id = si.sale_id;`,
  );

  return result;
};

const modelGetById = async (vendaId) => {
  const result = await conn.execute(
    'SELECT * FROM StoreManager.sales WHERE id = ?',
    [vendaId],
  );

  return result[0];
};

const novoItemId = async (novaVenda) => {
  const resInsert = await conn
    .execute('INSERT INTO StoreManager.products (name) VALUE (?)', [novaVenda]);
  return resInsert[0].insertId;
};

module.exports = {
  getAll,
  modelGetById,
  novoItemId,
};
