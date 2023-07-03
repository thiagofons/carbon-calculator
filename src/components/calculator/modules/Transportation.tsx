import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/transportation.sass";

import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";

import AddButton from "../assets/AddButton";
import VehicleInput from "../assets/VehicleInput";
import AirplaneInput from "../assets/AirplaneInput";

const Transportation = () => {
  const { data, setData } = useContext(ClientContext);

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

          <AirplaneInput
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
