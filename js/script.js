/* firebase config */

/* fatores de conversão */
const precisao = 2;

const fatores = {
  carbono: {
    energiaEletrica: 0.454,
    gasEncanado: 1,
    gasCozinha: 1,
    combustivel: {
      gasolina14: 1,
      gasolina15a20: 1,
      gasolina20: 1,
      alcool14: 1,
      alcool15a20: 1,
      alcool20: 1,
      gnv: 1,
      pickup: 1,
      taxi: 1,
      onibus: 1,
    },
  },
  metano: {
    tratamentoEfluentes: 1,
    residuos: 2,
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
    combustivel: {
      tipoVeiculo: document.querySelector("#event__vehicle__type__selector"),
      consumo: document.querySelector("#event__consumption"),
    },
    residuos: {
      consumo: document.querySelector("#event__consumption"),
    },
    viagemAerea: {
      origem: document.querySelector("#origin__event"),
      destino: document.querySelector("#destiny__event"),
      idaeEVolta: document.querySelector("#round__trip__event"),
      quantidadeVoos: document.querySelector("#fly__number__event"),
    },
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
    ano: document.querySelector("#electric__energy__year"),
  },
  gas: {
    mes: document.querySelector("#gas__month"),
    ano: document.querySelector("#gas__year"),
  },
  efluentes: {
    mes: document.querySelector("#effluent__month"),
    ano: document.querySelector("#effluent__year"),
  },
  residuos: {
    mes: document.querySelector("#waste__month"),
    ano: document.querySelector("#waste__year"),
  },
  combustivel: {
    mes: document.querySelector("#fossil__month"),
    ano: document.querySelector("#fossil__year"),
  },
  carbonoTotal: document.querySelector("#co2__total__number"),
  arvoresPlantadas: document.querySelector("#tree__number"),
  totalASerReduzido: document.querySelector("#reduce__total__number"),
};

const interface = {
  calculadora: document.querySelector("#calculator"),
  evento: {
    tipoVeiculo: document.querySelector("#event__vehicle__type"),
    dadosViagem: document.querySelector("#event__airplane"),
    consumo: document.querySelector(".event__consumption"),
  },
};

const calculadora = document.querySelector("#calculator");

/* setup */
const setarMesesEAnos = () => {
  const date = new Date();

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
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

const resetarFormularios = () => {
  const forms = document.querySelectorAll(".form");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
};

window.onload = () => {
  resetarValores();
  resetarFormularios();
  setarMesesEAnos();

  mudarCategoriaDeEvento();
  mudarCategoriaDeConsumo();
};

/* atualização de resultados */
const somarConsumoTotal = (valor) => {
  resultados.consumoTotal += parseFloat(valor);
  saidas.carbonoTotal.textContent = resultados.consumoTotal.toFixed(precisao);
};

/* processamento dos botoes */
botoes.carbono.energiaEletrica.addEventListener("click", () => {
  const consumo = entradas.carbono.energiaEletrica.value;
  const valor = consumo * fatores.carbono.energiaEletrica;

  somarConsumoTotal(valor);

  saidas.energiaEletrica.mes.textContent = valor.toFixed(precisao);
  saidas.energiaEletrica.ano.textContent = (valor * 12).toFixed(precisao);

  entradas.carbono.energiaEletrica.value = null;
});

botoes.metano.tratamentoEfluentes.addEventListener("click", () => {
  const consumo = entradas.metano.tratamentoEfluentes.value;
  const valor = consumo * fatores.metano.tratamentoEfluentes;

  somarConsumoTotal(valor);

  saidas.efluentes.mes.textContent = valor.toFixed(precisao);
  saidas.efluentes.ano.textContent = (valor * 12).toFixed(precisao);

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

  saidas.gas.mes.textContent = valor.toFixed(precisao);
  saidas.gas.ano.textContent = (valor * 12).toFixed(precisao);

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

  saidas.residuos.mes.textContent = valor.toFixed(precisao);
  saidas.residuos.ano.textContent = (valor * 12).toFixed(precisao);

  entradas.metano.residuos.value = null;
});

botoes.carbono.combustivel.addEventListener("click", () => {
  const veiculo = entradas.tipoVeiculo.value;

  if (veiculo) {
    const emissaoCombustivel = parseFloat(
      entradas.carbono.combustivel.value
        ? entradas.carbono.combustivel.value
        : 0
    );
    const valor = emissaoCombustivel * fatores.carbono.combustivel[veiculo];

    saidas.combustivel.mes.textContent = valor.toFixed(precisao);
    saidas.combustivel.ano.textContent = (valor * 12).toFixed(precisao);

    somarConsumoTotal(valor);

    entradas.carbono.combustivel.value = null;
  }
});

botoes.viagemAerea.addEventListener("click", () => {
  const dados = {
    origem: entradas.viagemAerea.origem.value,
    destino: entradas.viagemAerea.destino.value,
    idaEVolta: entradas.viagemAerea.idaeEVolta.value,
    quantidadeVoos: parseInt(entradas.viagemAerea.quantidadeVoos.value),
  };

  /* to-do: criar logica de obter distância entre origem e destino */
});

botoes.evento.addEventListener("click", () => {
  const tipo = entradas.evento.tipo.value;

  if (tipo != "") {
    let total = 0,
      consumo;

    switch (tipo) {
      case "residuos":
        consumo = parseFloat(
          entradas.evento.residuos.consumo.value
            ? entradas.evento.residuos.consumo.value
            : 0
        );

        total = consumo * fatores.metano.residuos;
        entradas.evento.residuos.consumo.value = null;
        break;
      case "combustivel":
        consumo = parseFloat(
          entradas.evento.combustivel.consumo.value
            ? entradas.evento.combustivel.consumo.value
            : 0
        );
        const tipoVeiculo = entradas.evento.combustivel.tipoVeiculo.value;

        if (tipoVeiculo) {
          total = consumo * fatores.carbono.combustivel[tipoVeiculo];
        }
        entradas.evento.combustivel.consumo.value = null;

        break;
      case "viagem":
        const dados = {
          origem: entradas.viagemAerea.origem,
          destino: entradas.viagemAerea.destino,
          idaEVolta: entradas.viagemAerea.idaeEVolta,
          quantidadeVoos: parseInt(entradas.viagemAerea.quantidadeVoos),
        };

        entradas.evento.viagemAerea.origem.value = null;
        entradas.evento.viagemAerea.destino.value = null;
        entradas.evento.viagemAerea.idaeEVolta.value = null;
        entradas.evento.viagemAerea.quantidadeVoos.value = 0;

        break;
      default:
        break;
    }

    somarConsumoTotal(total);
  }
});

/* mudanças de interface */
const mudarCategoriaDeConsumo = () => {
  const categoria = entradas.categoriaDeConsumo.value;

  categoria === "evento"
    ? interface.calculadora.classList.add("hide")
    : interface.calculadora.classList.remove("hide");
};

const mudarCategoriaDeEvento = () => {
  const categoria = entradas.evento.tipo.value;

  switch (categoria) {
    case "residuos":
      interface.evento.tipoVeiculo.classList.add("hide");
      interface.evento.dadosViagem.classList.add("hide");
      interface.evento.consumo.classList.remove("hide");
      entradas.evento.residuos.consumo.placeholder = "m³";
      break;

    case "combustivel":
      interface.evento.tipoVeiculo.classList.remove("hide");
      interface.evento.dadosViagem.classList.add("hide");
      interface.evento.consumo.classList.remove("hide");
      entradas.evento.combustivel.consumo.placeholder = "km";
      break;

    case "viagem":
      interface.evento.dadosViagem.classList.remove("hide");
      interface.evento.tipoVeiculo.classList.add("hide");
      interface.evento.consumo.classList.add("hide");

      break;
    default:
      break;
  }
};
