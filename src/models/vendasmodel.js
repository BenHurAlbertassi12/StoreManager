const conn = require('./connection');

const getAll = async () => {
  const [result] = await conn.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const modelGetById = async (id) => {
  const [[result]] = await conn.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );

  return result;
};

const novoItemId = async (name) => {
  const [{ insertId }] = await conn
    .execute('INSERT INTO StoreManager.products (name) VALUE (?)', [name]);
  return insertId;
};

module.exports = {
  getAll,
  modelGetById,
  novoItemId,
};
