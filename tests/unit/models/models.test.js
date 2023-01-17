const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { model } = require('../../../src/models');

const { produtos, upProduto, createProduto } = require('../mock/mock');

describe('Testes de unidade do model de produtos', function () {

  it('model 1', async function () {

    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const result = await model.novoItemId(createProduto);

    expect(result).to.equal(42);
  });

  it('model 2', async function () {

    sinon.stub(connection, 'execute').resolves([[produtos[0]]]);

    const result = await model.modelGetById(1);

    expect(result).to.be.deep.equal(produtos[0]);
  });

  it('model 3', async function () {

    sinon.stub(connection, 'execute').resolves([produtos]);

    const result = await model.getAll();

    expect(result).to.equal(produtos);
  });

  afterEach(function () {
    sinon.restore();
  });
});
// Testes retirados e adaptados pelo conteudo da aula de model, repositório usado em aula segue na linha de baixo
// https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-controller-course/tests/unit/models/travel.model.test.js