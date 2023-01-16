const express = require('express');

const app = express();

app.use(express.json());

const rotaProduto = require('./routes/productRouter');
// const rotaVenda = require('./routes/rotaVenda');
// exportando a rota

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', rotaProduto);
// app.use('/sales', rotaVenda);
// definido a rota

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;

// opitei por fazer a aplicação completamente em portugues pois 
// durante a mentoria de hoje cedo (13/01) foi comentado sobre o o asunto

// depois de ir dormir bolado pois não conseguia resolver nada, o Anjo Roberto Ayres Pimenta publicou o video https://trybecourse.slack.com/archives/C03G5SRQSLE/p1673654658258289 e resolveu minha vida, te amo <3