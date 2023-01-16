const Joi = require('joi');
const { model } = require('../models/vendas.index');

const productsSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const findAll = async () => {
  const produtos = await model.getAll(); 
  return {
    type: null, message: produtos,
  };
};

const serviceGetById = async (id) => {
  const result = await model.modelGetById(Number(id));

  if (!result) return { type: 'error', message: 'Product not found' };

  return { type: null, message: result };
};

const controllerCreate = async (name) => {
  const { error } = productsSchema.validate(name);
  if (error.type) return error;

  const novoItId = await model.novoItemId(name);
  const novoId = await model.modelGetById(novoItId);
  return { type: null, message: novoId };
};

module.exports = {
  findAll,
  controllerCreate,
  serviceGetById,
};
