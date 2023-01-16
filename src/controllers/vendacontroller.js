const { service } = require('../services/venda.index');

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

module.exports = {
  findAll,
  controllerGetById,
  controllerCreate,
};
