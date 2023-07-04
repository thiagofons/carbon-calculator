import { createContext, useState } from "react";

type ConsumptionProps = {
  children: any;
};

export type Consumption = {
  mes: number;
  ano: number;
};

type EmissionData = {
  inventario: {
    energiaEletrica: Consumption;
    agua: Consumption;
    gas: Consumption;
    residuos: Consumption;
    transporte: Consumption;
  };
  evento: {
    viagem: number;
    residuos: number;
    transporte: number;
  };
  total: {
    mes: number;
    ano: number;
    arvores: number;
  };
};
export type CalculatorEmissionData = {
  data: EmissionData;
  setData: (d: EmissionData) => void;
};

export const ClientContext = createContext<CalculatorEmissionData>({
  data: {
    inventario: {
      energiaEletrica: {
        mes: 0,
        ano: 0,
      },
      agua: {
        mes: 0,
        ano: 0,
      },
      transporte: {
        mes: 0,
        ano: 0,
      },
      gas: {
        mes: 0,
        ano: 0,
      },
      residuos: {
        mes: 0,
        ano: 0,
      },
    },
    evento: {
      viagem: 0,
      residuos: 0,
      transporte: 0,
    },
    total: {
      mes: 0,
      ano: 0,
      arvores: 0,
    },
  },

  setData: () => {},
});

export const ClientProvider = (props: ConsumptionProps) => {
  const [data, setData] = useState({
    inventario: {
      energiaEletrica: {
        mes: 0,
        ano: 0,
      },
      agua: {
        mes: 0,
        ano: 0,
      },
      transporte: {
        mes: 0,
        ano: 0,
      },
      gas: {
        mes: 0,
        ano: 0,
      },
      residuos: {
        mes: 0,
        ano: 0,
      },
    },
    evento: {
      viagem: 0,
      residuos: 0,
      transporte: 0,
    },
    total: {
      mes: 0,
      ano: 0,
      arvores: 0,
    },
  });
  return (
    <ClientContext.Provider value={{ data, setData }}>
      {props.children}
    </ClientContext.Provider>
  );
};
