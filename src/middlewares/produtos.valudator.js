const nomeInvalido = {
  error: {
    code: '"name" is required',
  },
};

const tamanhoInvalido = {
  error: {
    code: '"name" length must be at least 5 characters long',
  },
};

const validator = {
  validatorProduto: (req, res, next) => {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json(nomeInvalido);
    }

    if (name.length < 5) {
      return res
        .status(422)
        .json(tamanhoInvalido);
    }

    next();
  },
};

module.exports = {
  validator,
};
// criado a partir do video da Luá Octaviano 45:04
// https://trybecourse.slack.com/archives/C02TH6V3MC5/p1660156805827849?thread_ts=1660048173.909139&cid=C02TH6V3MC5

// requisito 4 retirado do video acima em no tempo de 51:42
