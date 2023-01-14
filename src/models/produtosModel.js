const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM exercices.products';
  const employees = await connection.execute(query);
  return employees;
};

const create = async ({ name }) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUE (?)';
  const [novoProduto] = await connection.execute(query, [name]);
  return novoProduto.insertId;
};

module.exports = {
  getAll,
  create,
};

// --- CHSD024 - MSC do zero--- tempo aproximado 24:15

// linha 10 --- 39:26 --- retirei do banco de dados seed.sql na linha 11