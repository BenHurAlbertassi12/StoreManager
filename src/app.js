const express = require('express');

const app = express();

const rotaProduto = require('./routes/rotaDosProdutos');
// exportando a rota

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', rotaProduto);
// definido a rota

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;

// opitei por fazer a aplicação completamente em portugues pois 
// durante a mentoria de hoje cedo (13/01) foi comentado sobre o o asunto