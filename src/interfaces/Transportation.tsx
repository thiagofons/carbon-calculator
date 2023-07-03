type Fuel = {
  tipoVeiculo: string;

};

export type Airplane = {
  origem: string;
  destino: string;
  idaEVolta: boolean;
  quantidadeVoos: number;
};

export type TransportationProps = {
  combustivel: Fuel;
  aviao: Airplane;
};
