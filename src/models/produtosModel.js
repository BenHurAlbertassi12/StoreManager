const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

module.exports = {
  getAll,
  // insert,
  // create,
};

// --- CHSD024 - MSC do zero--- tempo aproximado 24:15

// linha 10 --- 39:26 --- retirei do banco de dados seed.sql na linha 11

// dei uma tiltada, pelo video não estava "andando" fui no course no link do dia um, na parte "implementando a função para listar" e copiei o codigo

// variavel "insert" tbm retirada e adapatada do que foi falado na linha a cima