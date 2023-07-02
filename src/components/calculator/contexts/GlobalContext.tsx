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
      carroGasolinaAte1_4: number;
      carroGasolinaDe1_5Ate2_0: number;
      carroGasolinaAcima2_0: number;
      carroAlcoolAte1_4: number;
      carroAlcoolDe1_5Ate2_0: number;
      carroAlcoolAcima2_0: number;
      carroGasNatural: number;
      carroDiesel: number;
      carroTaxi: number;

      onibus: number;
      aviao: number;
    };
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
      carroGasolinaAte1_4: 5,
      carroGasolinaDe1_5Ate2_0: 5,
      carroGasolinaAcima2_0: 5,
      carroAlcoolAte1_4: 5,
      carroAlcoolDe1_5Ate2_0: 5,
      carroAlcoolAcima2_0: 5,
      carroGasNatural: 5,
      carroDiesel: 5,
      carroTaxi: 5,
      onibus: 5,
      aviao: 5,
    },
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
      carroGasolinaAte1_4: 5,
      carroGasolinaDe1_5Ate2_0: 5,
      carroGasolinaAcima2_0: 5,
      carroAlcoolAte1_4: 5,
      carroAlcoolDe1_5Ate2_0: 5,
      carroAlcoolAcima2_0: 5,
      carroGasNatural: 5,
      carroDiesel: 5,
      carroTaxi: 5,
      onibus: 5,
      aviao: 5,
    },
  };

  return (
    <GlobalContext.Provider value={{ fatores }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
