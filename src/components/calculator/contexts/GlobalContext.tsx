import { createContext, useState } from "react";

type GlobalProps = {
  children: any;
};

type Date = {
  mes: number;
  ano: number;
};

export type GlobalData = {
  dataAtual: Date;
  setDataAtual: (d: Date) => void;

  fatores: {
    energiaEletrica: number;
    agua: number;
    gasCozinha: number;
    gasEncanado: number;
    residuos: number;
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
};

export const GlobalContext = createContext<GlobalData>({
  dataAtual: {
    mes: 0,
    ano: 0,
  },
  setDataAtual: () => {},

  fatores: {
    energiaEletrica: 5,
    agua: 5,
    gasCozinha: 5,
    gasEncanado: 5,
    residuos: 5,
    transporte: {
      veiculoGasolina: 5,
      veiculoGNV: 5,
      veiculoAlcool: 5,
      veiculoDiesel: 5,
      motoGasolina: 5,
      motoAlcool: 5,
      aviao: 5,
    },
    conversaoParaArvores: 10,
  },
});

export const GlobalProvider = (props: GlobalProps) => {
  const dateObj = new Date();
  const mesAtual = dateObj.getMonth();
  const anoAtual = dateObj.getFullYear();

  const [dataAtual, setDataAtual] = useState({
    mes: mesAtual,
    ano: anoAtual,
  });

  const fatores = {
    energiaEletrica: 5,
    agua: 5,
    gasCozinha: 5,
    gasEncanado: 5,
    residuos: 5,
    transporte: {
      veiculoGasolina: 5,
      veiculoGNV: 5,
      veiculoAlcool: 5,
      veiculoDiesel: 5,
      motoGasolina: 5,
      motoAlcool: 5,
      aviao: 5,
    },
    conversaoParaArvores: 10,
  };

  return (
    <GlobalContext.Provider value={{ dataAtual, setDataAtual, fatores }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
