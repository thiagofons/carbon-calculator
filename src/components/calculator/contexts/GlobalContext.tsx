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
      carro: {
        gasolina: {
          ate1_4: number;
          de1_5Ate2_0: number;
          acima2_0: number;
        };
        alcool: {
          ate1_4: number;
          de1_5Ate2_0: number;
          acima2_0: number;
        };
        gasNatural: number;
        diesel: number;
        taxi: number;
      };
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
      carro: {
        gasolina: {
          ate1_4: 5,
          de1_5Ate2_0: 5,
          acima2_0: 5,
        },
        alcool: {
          ate1_4: 5,
          de1_5Ate2_0: 5,
          acima2_0: 5,
        },
        gasNatural: 5,
        diesel: 5,
        taxi: 5,
      },
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
      carro: {
        gasolina: {
          ate1_4: 5,
          de1_5Ate2_0: 5,
          acima2_0: 5,
        },
        alcool: {
          ate1_4: 5,
          de1_5Ate2_0: 5,
          acima2_0: 5,
        },
        gasNatural: 5,
        diesel: 5,
        taxi: 5,
      },
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
