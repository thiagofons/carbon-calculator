/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/airplane_input.sass";

import { Airplane } from "../../../interfaces/Transportation";
import { useEffect, useState } from "react";
import { Consumption } from "../contexts/ClientContext";

const AirplaneInput = (props: Consumption) => {
  const [consumo, setConsumo] = useState<Airplane>({
    origem: "",
    destino: "",
    idaEVolta: false,
    quantidadeVoos: 0,
  });

  const calcularViagem = () => {
    props.mes = 2;
    props.ano = 4;
  }

  useEffect(() => {
    calcularViagem();
  }, [consumo])

  
  return (
    <section className="airplane__input">
      <section className="origin__input">
        <input
          className="text__input"
          type="text"
          placeholder="Origem"
          onChange={(e) => setConsumo({ ...consumo, origem: e.target.value })}
        />
      </section>
      <section className="destination__input">
        <input
          className="text__input"
          type="text"
          placeholder="Destino"
          onChange={(e) =>
            setConsumo({
              ...consumo,
              destino: e.target.value,
            })
          }
        />
      </section>
      <section className="round__trip">
        <input
          type="checkbox"
          onChange={(e) =>
            setConsumo({ ...consumo, idaEVolta: !!e.target.value })
          }
        />
        <span>ida e volta</span>
      </section>
      <section className="fly__number">
        <label>Quantidade de vôos</label>
        <input
          type="number"
          value={consumo.quantidadeVoos}
          min="0"
          onChange={(e) =>
            setConsumo({ ...consumo, quantidadeVoos: parseInt(e.target.value) })
          }
        />
      </section>
    </section>
  );
};

export default AirplaneInput;
