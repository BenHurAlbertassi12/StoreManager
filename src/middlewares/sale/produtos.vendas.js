const validator = (req, res, next) => {
  const { name, quantity } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  
  if (!quantity) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  if (quantity.length <= 1) {
    return res
      .status(422)
      .json({ message: '"name" length must be at least 5 characters long' });
  }

  next();
};

module.exports = {
  validator,
};
