import { createContext, useState } from "react";

type GlobalProps = {
  children: any;
};

type Date = {
  mes: number;
  ano: number;
};

export type MonthFactor = {
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
};

export const convertNumberToMonth = (n: number) => {
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];
  return months[n];
};

export type GlobalData = {
  dataAtual: Date;
  setDataAtual: (d: Date) => void;

  fatores: {
    energiaEletrica: MonthFactor;
    agua: number;
    gasCozinha: number;
    gasEncanado: number;
    residuos: MonthFactor;
    transporte: {
      veiculoGasolina: number;
      veiculoGNV: number;
      veiculoAlcool: number;
      veiculoDiesel: number;
      motoGasolina: number;
      motoAlcool: number;
      aviao: number;
    };

    conversaoParaArvores: number;
  };
  setFatores: (f: any) => void;
};

export const GlobalContext = createContext<GlobalData>({
  dataAtual: {
    mes: 0,
    ano: 0,
  },
  setDataAtual: () => {},

  fatores: {
    energiaEletrica: {
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    agua: 0,
    gasCozinha: 25.09,
    gasEncanado: 5,
    residuos: {
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
    transporte: {
      veiculoGasolina: 0,
      veiculoGNV: 0,
      veiculoAlcool: 0,
      veiculoDiesel: 0,
      motoGasolina: 0,
      motoAlcool: 0,
      aviao: 0,
    },
    conversaoParaArvores: 0,
  },
  setFatores: () => {},
});

export const GlobalProvider = (props: GlobalProps) => {
  const dateObj = new Date();
  const mesAtual = dateObj.getMonth();
  const anoAtual = dateObj.getFullYear();

  const [dataAtual, setDataAtual] = useState({
    mes: mesAtual,
    ano: anoAtual,
  });

  const [fatores, setFatores] = useState({
    energiaEletrica: {
      jan: 0.0732,
      feb: 0.0503,
      mar: 0.0406,
      apr: 0.0216,
      may: 0.028,
      jun: 0.0441,
      jul: 0.0419,
      aug: 0.0457,
      sep: 0.0491,
      oct: 0.0471,
      nov: 0.0402,
      dec: 0.0294,
    },
    agua: 5,
    gasCozinha: 25.09,
    gasEncanado: 5,
    residuos: {
      jan: 2.58,
      feb: 2.58,
      mar: 2.64,
      apr: 2.83,
      may: 3.01,
      jun: 3.2,
      jul: 3.39,
      aug: 3.58,
      sep: 3.77,
      oct: 3.96,
      nov: 4.15,
      dec: 4.33,
    },
    transporte: {
      veiculoGasolina: 0.09 * 0.67 * 0.8 * 3.67,
      veiculoGNV: 0.08 * 0.75 * 0.71 * 2.96,
      veiculoAlcool: 0.14 * 0.86 * 0.8 * 0,
      veiculoDiesel: 0.4 * 0.85 * 0.84 * 2.6203,
      motoGasolina: 0.025 * 0.67 * 0.8 * 3.67,
      motoAlcool: 0.14 * 0.86 * 0.8 * 0,
      aviao: 9.09 * 0.86 * 0.8 * 2.5249,
    },
    conversaoParaArvores: 0.007,
  });

  return (
    <GlobalContext.Provider
      value={{ dataAtual, setDataAtual, fatores, setFatores }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
