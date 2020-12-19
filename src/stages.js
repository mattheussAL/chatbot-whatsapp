var stages = {
  0: {
    descricao: "Boas Vindas",
    obj: require("./stages/stage0.js"),
  },
  1: {
    descricao: "Vendas",
    obj: require("./stages/stage1.js"),
  },
  2: {
    descricao: "Resumo",
    obj: require("./stages/stage2.js"),
  },
  3: {
    descricao: "Endereço",
    obj: require("./stages/stage3.js"),
  },
  4: {
    descricao: "Enceramento",
    obj: require("./stages/stage4.js"),
  },
};

exports.step = stages;