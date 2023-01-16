const Joi = require('joi');
const { model } = require('../models');

const productsSchema = Joi.object({
  name: Joi.string().min(5).required(),
});
// const productValidate = (name) => {
//   const { error } = productsSchema.validate({ name });
//   if (error) return { message: error.message };

//   return { type: null, message: '' };
// };

  const findAll = async () => {
    const produtos = await model.getAll(); // mano não acredito que esta droga estava sem o await -,-
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

const upItem = async ({ itemId, itemNome }) => {
  const result = await model.modelGetById(Number(itemId));

  if (!result) return { type: 'error', message: 'Product not found' };

  await model.updateById(itemId, itemNome);

  const attItem = await model.modelGetById(itemId);

  return { type: null, message: attItem };
};

module.exports = {
  upItem,
  findAll,
  controllerCreate,
  serviceGetById,
};

// arquivo criado apartir da mentoria --- CHSD024 - MSC do zero --- tempo 12:45 e atualizado aproximadamente em 21:00
// metodo Joi 53:00

// linha create, estava fazendo segundo o video, entretanto constava um erro que não conseguia resolver
// simplifiuei o retorno do erro, antes estava algo como: 
// if (error) throw { status:400, message: error.message }

// Implementando a função createPassenger ---  retirado para a função de criar
// Implementando a função findbyid ---  retirado para a função de criar

// coigo do update tbm retirado da aula

// https://github.com/tryber/msc-architecture-trybecar/tree/simple-application-controller-live-lectures
// repositório utilizado na aula e utilizado neste projeto (adapatado)