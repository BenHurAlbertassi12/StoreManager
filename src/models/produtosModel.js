const { connection } = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM exercices.products';
  const employees = await connection.execute(query);
  return employees;
};

module.exports = {
  getAll,
};

// --- CHSD024 - MSC do zero--- tempo aproximado 24:15