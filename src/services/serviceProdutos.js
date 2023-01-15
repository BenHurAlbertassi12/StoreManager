// const Joi = require('joi');
const { produtosModel } = require('../models');

// const productsSchema = Joi.object({
//   name: Joi.string().min(2).max(45).required,
// });

  const findAll = async () => {
    const produtos = produtosModel.getAll();
    return {
      type: null, message: produtos,
  };
  };

module.exports = {
  findAll,
};

// arquivo criado apartir da mentoria --- CHSD024 - MSC do zero --- tempo 12:45 e atualizado aproximadamente em 21:00
// metodo Joi 53:00

// linha create, estava fazendo segundo o video, entretanto constava um erro que não conseguia resolver
// simplifiuei o retorno do erro, antes estava algo como: 
// if (error) throw { status:400, message: error.message }