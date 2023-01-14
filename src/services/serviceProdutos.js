const Joi = require('joi');
const produtosModel = require('../models/produtosModel');

const productsSchema = Joi.object({
  name: Joi.string().min(2).max(45).required,
});

const getAll = async () => {
  const produtos = produtosModel.getAll();
  return produtos;
};

const create = async ({ name }) => {
  // const { error } = productsSchema.validate({ name });
  // if (error) throw { status: 400, message: error.message };
  
  const id = await produtosModel.create({ name });

  return { id, name };
};

module.exports = {
  getAll,
  create,
  productsSchema,
};

// arquivo criado apartir da mentoria --- CHSD024 - MSC do zero --- tempo 12:45 e atualizado aproximadamente em 21:00
// metodo Joi 53:00