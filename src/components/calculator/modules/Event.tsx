import { useContext, useState } from "react";
import EventSelector from "../assets/EventSelector";
import VehicleSelector from "../assets/VehicleSelector";
/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/event.sass";
import { TransportationProps } from "../../../interfaces/Transportation";

import { ClientContext } from "../contexts/ClientContext";
import AirplaneInput from "../assets/AirplaneInput";

type ConsumptionEvent = {
  transporte: TransportationProps;
  residuos: {
    consumo: number;
  };
};

const Event = () => {
  const { data, setData } = useContext(ClientContext);

  const [evento, setEvento] = useState("");
  const [consumo, setConsumo] = useState<ConsumptionEvent>({
    transporte: {
      combustivel: {
        tipoVeiculo: "",
      },
      aviao: {
        origem: "",
        destino: "",
        idaEVolta: false,
        quantidadeVoos: 0,
      },
    },
    residuos: {
      consumo: 0,
    },
  });

  return (
    <section className="box event">
      <header className="box__header">
        <h3>Adição de evento</h3>
      </header>

      <main className="box__body">
        <section className="event__data">
          <section className="event__type">
            <label>Tipo do evento</label>
            <EventSelector selected={evento} setSelected={setEvento} />
          </section>
          <section className="event__info">
            {(evento === "combustivel" && (
              <VehicleSelector
                selected={consumo.transporte.combustivel.tipoVeiculo}
                setSelected={(e) =>
                  setConsumo({
                    ...consumo,
                    transporte: {
                      ...consumo.transporte,
                      combustivel: {
                        tipoVeiculo: e,
                      },
                    },
                  })
                }
              />
            )) ||
              (evento === "residuos" && (
                <input
                  type="text"
                  className="text__input methane__consumption"
                  placeholder="kg"
                  onChange={(e) => {
                    setData({
                      ...data,
                      evento: {
                        ...data.evento,
                        residuos: parseFloat(
                          !isNaN(parseFloat(e.target.value))
                            ? e.target.value
                            : "0"
                        ),
                      },
                    });
                  }}
                />
              ))}
          </section>
        </section>
        <section className="results"></section>
      </main>
    </section>
  );
};

export default Event;
