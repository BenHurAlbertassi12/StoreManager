// const validatorVenda = (req, res, next) => {
//   const { name, quantity } = req.body;

//   if (!name) {
//     return res.status(400).json({ message: '"productId" is required' });
//   }

//   if (!quantity) {
//     return res.status(400).json({ message: '"quantity" is required' });
//   }

//   if (name.length <= 4) {
//     return res
//       .status(422)
//       .json({ message: '"name" length must be at least 5 characters long' });
//   }

//   next();
// };

// module.exports = {
//   validatorVenda,
// };
// // criado a partir do video da Luá Octaviano 45:04
// // https://trybecourse.slack.com/archives/C02TH6V3MC5/p1660156805827849?thread_ts=1660048173.909139&cid=C02TH6V3MC5

// // requisito 4 retirado do video acima em no tempo de 51:42
