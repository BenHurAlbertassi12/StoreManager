// // const Joi = require('joi');
// const { model } = require('../models');

// // const productsSchema = Joi.object({
// //   name: Joi.string().min(5).required(),
// // });

//   // const findAll = async () => {
//   //   const venda = await model.getAll(); // mano não acredito que esta droga estava sem o await -,-
//   //   return {
//   //     type: null, message: venda,
//   // }; 
//   // };
  
// const serviceGetById = async (id) => {
//   const venda = await model.modelGetById(Number(id));

//   if (!venda) return { type: 'error', message: 'Product not found' };

//   return { type: null, message: venda };
// };

// // const controllerCreate = async (name) => {
// //   const { error } = productsSchema.validate(name);
// //   if (error.type) return error;

// //   const novoItId = await model.novoItemId(name);
// //   const novoId = await model.modelGetById(novoItId);
// //   return { type: null, message: novoId };  
// // };

// module.exports = {
//   // findAll,
//   // controllerCreate,
//   serviceGetById,
// };

// // arquivo criado apartir da mentoria --- CHSD024 - MSC do zero --- tempo 12:45 e atualizado aproximadamente em 21:00
// // metodo Joi 53:00

// // linha create, estava fazendo segundo o video, entretanto constava um erro que não conseguia resolver
// // simplifiuei o retorno do erro, antes estava algo como: 
// // if (error) throw { status:400, message: error.message }

// // Implementando a função createPassenger ---  retirado para a função de criar
// // Implementando a função findbyid ---  retirado para a função de criar
