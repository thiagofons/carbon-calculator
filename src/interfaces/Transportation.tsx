type Fuel = {
  tipoVeiculo: string;

};

type Airplane = {
  origem: string;
  destino: string;
  idaEVolta: boolean;
  quantidadeVoos: number;
};

export type TransportationProps = {
  combustivel: Fuel;
  aviao: Airplane;
};
