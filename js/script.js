/* campos de entrada e saida */
const entradas = {
  categoriaDeConsumo: document.querySelector("#consumption__category"),
  mes: document.querySelector("#month"),
  ano: document.querySelector("#year"),
  carbonoEnergiaEletrica: document.querySelector("#electric__energy"),
  metanoTratamentoEfluentes: document.querySelector("#effluent__emission"),
  carbonoGasEncanado: document.querySelector("#piped__gas"),
  carbonoGasCozinha: document.querySelector("#cylinder__gas"),
  metanoResiduos: document.querySelector("#waste"),
  tipoVeiculo: document.querySelector("#vehicle"),
  carbonoCombustivel: document.querySelector("#vehicle__consumption"),
  origemViagemAerea: document.querySelector("#origin"),
  destinoViagemAerea: document.querySelector("#destiny"),
  idaeEVoltaViagemAerea: document.querySelector("#round__trip"),
  quantidadeVoos: document.querySelector("#fly__number"),
  tipoEvento: document.querySelector("#event__type"),
  consumoEvento: document.querySelector("#event__consumption"),
};

const botoes = {
  carbonoEnergiaEletrica: document.querySelector("#electric__energy__btn"),
  metanoTratamentoEfluentes: document.querySelector("#methane__effluents__btn"),
  carbonoGas: document.querySelector("#gas__btn"),
  metanoResiduos: document.querySelector("#methane__waste__btn"),
  carbonoCombustivel: document.querySelector("#fuel__btn"),
  viagemAerea: document.querySelector("#air__travel__btn"),
  evento: document.querySelector("#event__btn"),
};

const saidas = {};

/* reset de formulários */
const forms = document.querySelectorAll(".form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

/* processamento dos botoes */
botoes.carbonoEnergiaEletrica.addEventListener("click", () => {
  const consumo = entradas.carbonoEnergiaEletrica.value;
  const resultado = 
});

/* mudança de interface (evento vs inventário) */
