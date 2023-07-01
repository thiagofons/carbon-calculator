import { useContext, useState } from "react";
import VehicleSelector from "../assets/VehicleSelector";
import AirplaneInput from "../assets/AirplaneInput";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/transportation.sass";

import { TransportationProps } from "../../../interfaces/Transportation";
import { ClientContext } from "../contexts/ClientContext";

const Transportation = () => {
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

  return (
    <form className="box transportation" action="">
      <header className="box__header">
        <h3>Transporte</h3>
      </header>
      <main className="box__body">
        <section className="consumption">
          <h4>Combustível</h4>
          <div className="field">
            <label>Tipo de veículo</label>
            <VehicleSelector
              selected={consumo.combustivel.tipoVeiculo}
              setSelected={(e) =>
                setConsumo({
                  ...consumo,
                  combustivel: {
                    ...consumo.combustivel,
                    tipoVeiculo: e,
                  },
                })
              }
            />
          </div>

          <div>
            <label>Consumo</label>
            <input
              className="text__input"
              type="text"
              placeholder="km"
              onChange={(e) =>
                setData({
                  ...data,
                  inventario: {
                    ...data.inventario,
                    transporte: {
                      mes: parseFloat(e.target.value ? e.target.value : "0"),
                      ano:
                        parseFloat(e.target.value ? e.target.value : "0") * 12,
                    },
                  },
                })
              }
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </section>
        <section className="consumption">
          <h4>Viagens aéreas</h4>

          <AirplaneInput consumo={consumo} setConsumo={setConsumo} />

          <button className="add__button">Adicionar ao cálculo</button>
        </section>

        <section className="box__results">
          <div className="date__result">
            <h4>Mês</h4>
            <span className="consumption__value">
              {data.inventario.transporte.mes}
            </span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          <div className="date__result">
            <h4>Ano</h4>
            <span className="consumption__value">
              {data.inventario.transporte.ano}
            </span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </section>
      </main>
    </form>
  );
};

export default Transportation;
