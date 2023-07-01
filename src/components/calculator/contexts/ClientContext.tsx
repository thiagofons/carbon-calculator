import { createContext, useState } from "react";

type ConsumptionProps = {
  children: any;
};

type Consumption = {
  mes: number;
  ano: number;
};

type Date = {
  mes: string;
  ano: number;
};

type EmissionData = {
  dataAtual: Date;
  inventario: {
    energiaEletrica: Consumption;
    agua: Consumption;
    gas: Consumption;
    residuos: Consumption;
    transporte: Consumption;
  };
  evento: {
    energiaEletrica: number;
    agua: number;
    gas: number;
    residuos: number;
    transporte: number;
  };
};
export type CalculatorEmissionData = {
  data: EmissionData;
  setData: (d: EmissionData) => void;
};

export const ClientContext = createContext<CalculatorEmissionData>({
  data: {
    dataAtual: {
      mes: "",
      ano: 0,
    },
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
      energiaEletrica: 0,
      agua: 0,
      gas: 0,
      residuos: 0,
      transporte: 0,
    },
  },

  setData: () => {},
});

export const ClientProvider = (props: ConsumptionProps) => {
  const dateObj = new Date();
  const mesAtual = dateObj.getMonth();
  const anoAtual = dateObj.getFullYear();

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [data, setData] = useState({
    dataAtual: {
      mes: meses[mesAtual],
      ano: anoAtual,
    },
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
      energiaEletrica: 0,
      agua: 0,
      gas: 0,
      residuos: 0,
      transporte: 0,
    },
  });
  return (
    <ClientContext.Provider value={{ data, setData }}>
      {props.children}
    </ClientContext.Provider>
  );
};
