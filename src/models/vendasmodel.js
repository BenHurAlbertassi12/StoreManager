const conn = require('./connection');

const novoItemId = async () => {
  const [retorno] = await conn
    .execute('select * from StoreManage.sales');
  return retorno;
};
const novoquantity = async (name) => {
  const [retorno] = await conn
    .execute('select * from StoreManage.sales where id =?', [name]);
  return retorno;
};

module.exports = {
  novoItemId,
  novoquantity,
  // create,
};

// --- CHSD024 - MSC do zero--- tempo aproximado 24:15

// linha 10 --- 39:26 --- retirei do banco de dados seed.sql na linha 11
// getbyid tbm retirada e adapatada do que foi falado na linha a cima 1h:14min

// dei uma tiltada, pelo video não estava "andando" fui no course no link do dia um, na parte "implementando a função para listar" e copiei o codigo
