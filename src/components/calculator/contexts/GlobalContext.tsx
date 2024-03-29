import { createContext, useState, useEffect } from "react";
import { getObjectFromFirestore } from "../../../helpers/FirebaseHelper";

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

type Fatores = {
  energiaEletrica: MonthFactor;
  agua: number;
  gas: {
    cozinha: number;
    encanado: number;
  }
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
  conversaoArvores: number;
};

export type GlobalData = {
  dataAtual: Date;
  setDataAtual: (d: Date) => void;

  fatores: Fatores | null;
  setFatores: (f: Fatores) => void;
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
    gas: {
      cozinha: 0,
      encanado: 0
    },
    
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
    conversaoArvores: 0,
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

  const [fatores, setFatores] = useState<Fatores | null>(null);

  useEffect(() => {
    const fetchObject = async () => {
      try {
        // Chame a função para buscar o objeto
        const fetchedObject = await getObjectFromFirestore("fatoresComuns");
        setFatores(fetchedObject as Fatores);
        
      } catch (error) {
        // Trate o erro, se necessário
        console.log(error);
      }
    };
    fetchObject();
  }, []);

  return (
    <GlobalContext.Provider
      value={{ dataAtual, setDataAtual, fatores, setFatores }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};