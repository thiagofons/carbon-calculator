/* fatores de conversão */
const precision = 2;

const fatores = {
  carbono: {
    energiaEletrica: 0.454,
    gasEncanado: 1,
    gasCozinha: 1,
    combustivel: 1,
  },
  metano: {
    tratamentoEfluentes: 1,
    residuos: 2,
  },
  veiculo: {
    carro: 3,
  },
  viagemAerea: 1,
};

const resultados = {
  consumoTotal: 0,
  arvoresPlantadas: 0,
  totalASerReduzido: 0,
};

/* campos de entrada e saida */
const entradas = {
  categoriaDeConsumo: document.querySelector("#consumption__category"),
  data: {
    mes: document.querySelector("#month"),
    ano: document.querySelector("#year"),
  },
  carbono: {
    energiaEletrica: document.querySelector("#electric__energy"),
    gasEncanado: document.querySelector("#piped__gas"),
    gasCozinha: document.querySelector("#cylinder__gas"),
    combustivel: document.querySelector("#vehicle__consumption"),
  },
  metano: {
    tratamentoEfluentes: document.querySelector("#effluent__emission"),
    residuos: document.querySelector("#waste"),
  },
  tipoVeiculo: document.querySelector("#vehicle"),
  viagemAerea: {
    origem: document.querySelector("#origin"),
    destino: document.querySelector("#destiny"),
    idaeEVolta: document.querySelector("#round__trip"),
    quantidadeVoos: document.querySelector("#fly__number"),
  },
  evento: {
    tipo: document.querySelector("#event__type"),
    consumo: document.querySelector("#event__consumption"),
  },
};

const botoes = {
  carbono: {
    energiaEletrica: document.querySelector("#electric__energy__btn"),
    gas: document.querySelector("#gas__btn"),
    combustivel: document.querySelector("#fuel__btn"),
  },
  metano: {
    tratamentoEfluentes: document.querySelector("#methane__effluents__btn"),
    residuos: document.querySelector("#methane__waste__btn"),
  },
  viagemAerea: document.querySelector("#air__travel__btn"),
  evento: document.querySelector("#event__btn"),
};

const saidas = {
  energiaEletrica: {
    mes: document.querySelector("#electric__energy__month"),
    ano: document.querySelector("#electric__energy__year")
  },
  gas: {
    mes: document.querySelector("#gas__month"),
    ano: document.querySelector("#gas__year")
  },
  efluentes: {
    mes: document.querySelector("#effluent__month"),
    ano: document.querySelector("#effluent__year")
  },
  residuos: {
    mes: document.querySelector("#waste__month"),
    ano: document.querySelector("#waste__year")
  },
  combustivel: {
    mes: document.querySelector("#vehicle__month"),
    ano: document.querySelector("#vehicle__year")
  },
  carbonoTotal: document.querySelector("#co2__total__number"),
  arvoresPlantadas: document.querySelector("#tree__number"),
  totalASerReduzido: document.querySelector("#reduce__total__number"),
};

const calculadora = document.querySelector("#calculator");

/* setup */
const setarMesesEAnos = () => {
  const date = new Date();

  const meses = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  meses.map((mes) => {
    const option = document.createElement("option");
    option.classList.add("option");

    option.value = mes;
    option.textContent = mes;

    entradas.data.mes.appendChild(option);
  });

  const anoAtual = date.getFullYear();
  const anos = [];
  for (let ano = 2023; ano <= anoAtual; ano++) {
    anos.push(ano);
  }
  anos.map((ano) => {
    const option = document.createElement("option");
    option.classList.add("option");

    option.value = ano;
    option.textContent = ano;

    entradas.data.ano.appendChild(option);
  });
};

const resetarValores = () => {
  saidas.carbonoTotal.value = 0;
  saidas.arvoresPlantadas.value = 0;
  saidas.totalASerReduzido.value = 0;
};

window.onload = () => {
  resetarValores();
  setarMesesEAnos();
};

/* reset de formulários */
const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

/* atualização de resultados */
const somarConsumoTotal = (valor) => {
  resultados.consumoTotal += parseFloat(valor);
  saidas.carbonoTotal.textContent = resultados.consumoTotal.toFixed(precision);
};

/* processamento dos botoes */
botoes.carbono.energiaEletrica.addEventListener("click", () => {
  const consumo = entradas.carbono.energiaEletrica.value;
  const valor = consumo * fatores.carbono.energiaEletrica;

  somarConsumoTotal(valor);

  saidas.energiaEletrica.mes.textContent = valor.toFixed(precision);
  saidas.energiaEletrica.ano.textContent = (valor * 12).toFixed(precision);

  entradas.carbono.energiaEletrica.value = null;
});

botoes.metano.tratamentoEfluentes.addEventListener("click", () => {
  const consumo = entradas.metano.tratamentoEfluentes.value;
  const valor = consumo * fatores.metano.tratamentoEfluentes;

  somarConsumoTotal(valor);

  entradas.metano.tratamentoEfluentes.value = null;
});

botoes.carbono.gas.addEventListener("click", () => {
  const consumoGasEncanado = parseFloat(
    entradas.carbono.gasEncanado.value ? entradas.carbono.gasEncanado.value : 0
  );
  const consumoGasCozinha = parseFloat(
    entradas.carbono.gasCozinha.value ? entradas.carbono.gasCozinha.value : 0
  );

  const valor =
    consumoGasEncanado * fatores.carbono.gasEncanado +
    consumoGasCozinha * fatores.carbono.gasCozinha;

  somarConsumoTotal(valor);

  entradas.carbono.gasEncanado.value = null;
  entradas.carbono.gasCozinha.value = null;
});

botoes.metano.residuos.addEventListener("click", () => {
  const emissaoResiduos = parseFloat(
    entradas.metano.residuos.value ? entradas.metano.residuos.value : 0
  );
  const valor = emissaoResiduos * fatores.metano.residuos;

  somarConsumoTotal(valor);

  entradas.metano.residuos.value = null;
});

botoes.carbono.combustivel.addEventListener("click", () => {
  const veiculo = entradas.tipoVeiculo.value;

  if (veiculo) {
    const emissaoCombustivel = parseFloat(entradas.carbono.combustivel.value);
    const valor = emissaoCombustivel * fatores.veiculo[veiculo];

    somarConsumoTotal(valor);

    entradas.carbono.combustivel.value = null;
  }
});

botoes.viagemAerea.addEventListener("click", () => {
  const origem = entradas.viagemAerea.origem.value;
  const destino = entradas.viagemAerea.destino.value;
  const idaEVolta = entradas.viagemAerea.idaeEVolta.value;
  const quantidadeVoos = parseInt(entradas.viagemAerea.quantidadeVoos.value);

  /* to-do: criar logica de obter distância entre origem e destino */
});

botoes.evento.addEventListener("click", () => {
  const tipo = entradas.evento.tipo.value;

  if (tipo != "") {
    const consumo = parseFloat(
      entradas.evento.consumo.value ? entradas.evento.consumo.value : 0
    );
    let total = 0;

    switch (tipo) {
      case "residuos":
        total = consumo * fatores.metano.residuos;
        break;
      case "combustivel":
        total = consumo * fatores.carbono.combustivel;
        break;
      default:
        break;
    }

    somarConsumoTotal(total);
    entradas.evento.consumo.value = null;
  }
});

/* mudança de interface (evento vs inventário) */
const mudarCategoriaDeConsumo = () => {
  const categoria = entradas.categoriaDeConsumo.value;

  if (categoria === "evento") {
    calculadora.classList.add("hide");
  } else {
    calculadora.classList.remove("hide");
  }
};
