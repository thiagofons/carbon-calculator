/* fatores de conversão */
const fatores = {
  carbono: {
    energiaEletrica: 0.454,
    gasEncanado: 1,
    gasCozinha: 1,
    combustivel: 1,
  },
  metano: {
    tratamentoEfluentes: 1,
    residuos: 1,
  },
  veiculo: {},
  viagemAerea: 1,
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
  carbonoTotal: document.querySelector("#co2__total__number"),
  arvoresPlantadas: document.querySelector("#tree__number"),
  totalASerReduzido: document.querySelector("#reduce__total__number"),
};

const calculadora = document.querySelector("#calculator");

window.onload = () => {
  (saidas.carbonoTotal.value = 0),
    (saidas.arvoresPlantadas.value = 0),
    (saidas.totalASerReduzido.value = 0);
};

/* reset de formulários */
const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

/* processamento dos botoes */
botoes.carbono.energiaEletrica.addEventListener("click", () => {
  const consumo = entradas.carbono.energiaEletrica.value;
  const valor = consumo * fatores.carbono.energiaEletrica;

  saidas.carbonoTotal.value += valor;
  entradas.carbono.energiaEletrica.value = null;
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
