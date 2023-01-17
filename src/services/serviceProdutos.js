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

  if (!result) return { type: 'INVALID_VALUE', message: 'Product not found' };

  return { type: null, message: result };
};

const controllerCreate = async (name) => {
  const { error } = productsSchema.validate(name);
  if (error.type) return error;

  const novoItId = await model.novoItemId(name);
  const novoId = await model.modelGetById(novoItId);
  return { type: null, message: novoId };  
};

const upItem = async (id, name) => {
  const result = await model.modelGetById(id);

  if (!result) return { type: 'DRIVER_NOT_FOUND', message: 'Product not found' };

  await model.updateById(id, name);

  const attItem = await model.modelGetById(id);

  return { type: null, message: attItem };
};

const removeById = async (id) => {
  const itemId = await model.modelGetById(id);

  if (!itemId) return { type: 'DRIVER_NOT_FOUND', message: 'Product not found' };

  await model.modelRemove(id);
  
  return {};
};
// console.log('estou auiiiiiiiiiiiii', removeById());

module.exports = {
  removeById,
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