import { useContext, useState } from "react";
import VehicleSelector from "../assets/VehicleSelector";
import AirplaneInput from "../assets/AirplaneInput";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/transportation.sass";

import { TransportationProps } from "../../../interfaces/Transportation";
import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";
import { GlobalContext } from "../contexts/GlobalContext";
import { log } from "console";
import AddButton from "../assets/AddButton";
import VehicleInput from "../assets/VehicleInput";

const Transportation = () => {
  const { fatores } = useContext(GlobalContext);

  const { data, setData } = useContext(ClientContext);
  const [consumo, setConsumo] = useState<TransportationProps>({
    combustivel: {
      tipoVeiculo: "",
    },
    aviao: {
      origem: "",
      destino: "",
      idaEVolta: false,
      quantidadeVoos: 0,
    },
  });

  const seletor = (nome: string) => {
    switch (nome) {
      case "carroGasolinaAte1_4":
        return fatores.transporte.carroGasolinaAte1_4;
      case "carroGasolinaDe1_5Ate2_0":
        return fatores.transporte.carroGasolinaDe1_5Ate2_0;
      case "carroGasolinaAcima2_0":
        return fatores.transporte.carroGasolinaAcima2_0;
      case "carroAlcoolAte1_4":
        return fatores.transporte.carroAlcoolAte1_4;
      case "carroAlcoolDe1_5Ate2_0":
        return fatores.transporte.carroAlcoolDe1_5Ate2_0;
      case "carroAlcoolAcima2_0":
        return fatores.transporte.carroAlcoolAcima2_0;
      case "carroGasNatural":
        return fatores.transporte.carroGasNatural;
      case "carroDiesel":
        return fatores.transporte.carroDiesel;
      case "carroTaxi":
        return fatores.transporte.carroTaxi;
      case "onibus":
        return fatores.transporte.onibus;
      default:
        return 0;
    }
  };

  return (
    <section className="box transportation">
      <header className="box__header">
        <h3>Transporte</h3>
      </header>
      <main className="box__body">
        <section className="consumption">
          <VehicleInput
            consumo={data.inventario.transporte.mes}
            setConsumo={(valor) =>
              setData({
                ...data,
                inventario: {
                  ...data.inventario,
                  transporte: {
                    mes: valor,
                    ano: valor * 12,
                  },
                },
              })
            }
          />

          <AddButton value={data.inventario.transporte.mes} />
        </section>
        <section className="consumption">
          <h4>Viagens aéreas</h4>
          {/**
          <AirplaneInput mes={data.evento.viagem} ano={data.evento.viagem} />
           */}
          <button className="add__button">Adicionar ao cálculo</button>
        </section>
        <PartialResults
          month={data.inventario.transporte.mes}
          year={data.inventario.transporte.ano}
        />
      </main>
    </section>
  );
};

export default Transportation;
