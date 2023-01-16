const { service } = require('../services');
const errorMap = require('../middlewares/errorMap');

  const findAll = async (_req, res) => {
    const { type, message } = await service.findAll();

    if (type) return res.status(404).json(message);

    res.status(200).json(message);
  };

const controllerGetById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await service.serviceGetById(id);

  if (type) return res.status(404).json({ message });

  res.status(200).json(message);
};

const controllerCreate = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await service.controllerCreate(name);

  if (type) return res.status(201).json({ message });

  res.status(201).json(message);
};

const controllerUP = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const { type, message } = await service.startTravel({ id, name });

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

module.exports = {
  findAll,
  controllerGetById,
  controllerCreate,
  controllerUP,
};

// controller trabalha diretamente com a recepção e a resposta
// sua resposta sera responsavel por manupular request e response

// linhas 4 e 5:
// criado apartir da mentoria-- - CHSD024 - MSC do zero-- - tempo 14: 30

// linha create 36:14

// codigo de busca pelo id retirado do course, crud do zero pt 1

// codigo create tbm retirado do course "Implementando um CRUD do zero - Parte 6 - Camada Controller"