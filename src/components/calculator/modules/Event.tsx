import { useContext, useEffect, useState } from "react";
import EventSelector from "../assets/EventSelector";
import VehicleSelector from "../assets/VehicleSelector";
/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/event.sass";
import "aos/dist/aos.css";

import { TransportationProps } from "../../../interfaces/Transportation";

import { ClientContext } from "../contexts/ClientContext";

import { GlobalContext } from "../contexts/GlobalContext";
import VehicleInput from "../assets/VehicleInput";
import AddButton from "../assets/AddButton";
import TrashInput from "../assets/TrashInput";
import PartialEvent from "../assets/PartialEvent";

type ConsumptionEvent = {
  transporte: TransportationProps;
  residuos: {
    consumo: number;
  };
};

const Event = () => {
  const { data, setData } = useContext(ClientContext);

  const [evento, setEvento] = useState("combustivel");
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
    <section className="box event" data-aos="fade-up">
      <header className="box__header">
        <h3>Evento</h3>
      </header>

      <main className="box__body">
        <section className="event__data">
          <section className="event__type">
            <label>Tipo do evento</label>
            <EventSelector selected={evento} setSelected={setEvento} />
          </section>
          <section className="event__info">
            {(evento === "combustivel" && (
              <>
                <VehicleInput
                  consumo={data.evento.transporte}
                  setConsumo={(value) =>
                    setData({
                      ...data,
                      evento: { ...data.evento, transporte: value },
                    })
                  }
                />
                <AddButton value={data.evento.transporte} />
              </>
            )) ||
              (evento === "residuos" && (
                <>
                  <TrashInput
                    consumo={data.evento.residuos}
                    setConsumo={(value) => {
                      setData({
                        ...data,
                        evento: { ...data.evento, residuos: value },
                      });
                    }}
                  />
                  <AddButton value={data.evento.residuos} />
                </>
              )) ||
              (evento === "viagem" && <div className="travel__event"></div>)}
          </section>
        </section>
        <PartialEvent
          total={
            evento === "residuos" ? data.evento.residuos :
            evento === "combustivel" ? data.evento.transporte :
            evento === "viagem" ? data.evento.viagem : 0
          }
        />
      </main>
    </section>
  );
};

export default Event;
