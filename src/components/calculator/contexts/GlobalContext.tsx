import { createContext } from "react";

type GlobalProps = {
  children: any;
};

export type GlobalData = {
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
    <GlobalContext.Provider value={{ fatores }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
