// const snakeize = require('snakeize');
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
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';
  const [{ insertId }] = await conn.execute(query, [name]);
  return insertId;
};

const updateById = async (name, id) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
  const upId = await conn.execute((query), [id, name]);
  return upId;
};

module.exports = {
  updateById,
  getAll,
  modelGetById,
  novoItemId,
  // create,
};

// --- CHSD024 - MSC do zero--- tempo aproximado 24:15

// linha 10 --- 39:26 --- retirei do banco de dados seed.sql na linha 11
// getbyid tbm retirada e adapatada do que foi falado na linha a cima 1h:14min

// dei uma tiltada, pelo video não estava "andando" fui no course no link do dia um, na parte "implementando a função para listar" e copiei o codigo
