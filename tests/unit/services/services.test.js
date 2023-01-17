const { expect } = require('chai');
const sinon = require('sinon');

const { model } = require("../../../src/models");
const connection = require("../../../src/models/connection");
const { service } = require('../../../src/services');

const { produtos, upProduto, createProduto } = require('../mock/mock');

// const DRIVER_ON_THE_WAY = 2;

describe('Verificando service Produtos', function () {

  describe('Atribuições de viagem com erros de id inexistente', function () {
    it('estão falhando ao tentar atribuir uma viagem com viajante inexistente', async function () {
      
      sinon.stub(model, "getAll").resolves(produtos);

      // const body = { travelId: 99999, driverId: 1 };
      const error = await service.findAll();

      expect(error.type).to.equal(null);
      expect(error.message).to.deep.equal(produtos);
    });

    it('esta falhando ao tentar iniciar uma viagem com motorista ocupado', async function () {
      sinon.stub(model, 'modelGetById').resolves(produtos);
      // sinon.stub(driveDB, 'findById').resolves(undefined);

      // const body = { travelId: 1, driverId: 99999 };
      const error = await service.serviceGetById();

      expect(error.type).to.equal(null);
      expect(error.message).to.deep.equal(produtos);
    });

  afterEach(function () {
    sinon.restore();
  });
});
});