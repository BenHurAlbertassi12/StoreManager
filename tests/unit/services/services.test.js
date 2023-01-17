const { expect } = require('chai');
const sinon = require('sinon');

const { model } = require("../../../src/models");
const connection = require("../../../src/models/connection");
const { service } = require('../../../src/services');
const { validator } = require("../../../src/middlewares/produtos.valudator");

const { produtos, upProduto, createProduto } = require('../mock/mock');

// const DRIVER_ON_THE_WAY = 2;

describe('services', function () {

  describe('Atribuições de viagem com erros de id inexistente', function () {
    it('service test 1', async function () {
      
      sinon.stub(model, "getAll").resolves(produtos);

      // const body = { travelId: 99999, driverId: 1 };
      const error = await service.findAll();

      expect(error.type).to.equal(null);
      expect(error.message).to.deep.equal(produtos);
    });
    
    it("service test 2", async function () {
          sinon.stub(model, "novoItemId").resolves([{ insertId: 1 }]);
          sinon.stub(model, "modelGetById").resolves(produtos[0]);
    
          const result = await service.controllerCreate(validator);
    
          expect(result.type).to.equal(null);
          expect(result.message).to.deep.equal(produtos[0]);
        });

    it('service test 3', async function () {
      sinon.stub(model, 'modelGetById').resolves(produtos);
      // sinon.stub(driveDB, 'findById').resolves(undefined);
      
      // const body = { travelId: 1, driverId: 99999 };
      const error = await service.serviceGetById();
      
      expect(error.type).to.equal(null);
      expect(error.message).to.deep.equal(produtos);
    });

    it('service test 4', async function () {


      sinon.stub(model, 'modelGetById').resolves({});
      sinon.stub(model, 'updateById').resolves(upProduto);

      const response = await service.upItem(upProduto);

      expect(response).to.be.deep.equal({type: null, message: {}});
    });

  afterEach(function () {
    sinon.restore();
  });
});

});
