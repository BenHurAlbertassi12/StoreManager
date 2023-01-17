const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { service } = require('../../../src/services');
const { controller } = require('../../../src/controllers');

const { produtos, upProduto, createProduto } = require('../mock/mock');

describe('Teste de unidade do controller', function () {

  describe('Buscando itens', function () {
    it('quando não tem nenhuma item cadastrado retorna um array vazio', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(service, 'findAll')
        .resolves({ type: null, message: produtos });
      
      await controller.findAll(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(produtos);
    });

    it('cadastro de novo produto', async function () {
      const res = {};
      const req = {body: produtos};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(service, 'controllerCreate')
        .resolves({ type: null, message: produtos });
      
      await controller.controllerCreate(req, res);
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(produtos);
    });

    it('retorno status', async function () {
      const res = {};
      const req = { params: { id: 4 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon
        .stub(service, 'serviceGetById')
        .resolves({ type: null, message: produtos });
      
      await controller.controllerGetById(req, res);
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(produtos);
    });
  });
});


// https://github.com/tryber/msc-architecture-trybecar/blob/simple-application-controller-course/src/controllers/driver.controller.js