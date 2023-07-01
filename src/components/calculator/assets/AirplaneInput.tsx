/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/airplane_input.sass";

import { TransportationProps } from "../../../interfaces/Transportation";

type AirplaneInputProps = {
  consumo: TransportationProps;
  setConsumo: (c: TransportationProps) => void;
};

const AirplaneInput = (props: AirplaneInputProps) => {
  return (
    <section className="airplane__input">
      <section className="origin__input">
        <input
          className="text__input"
          type="text"
          placeholder="Origem"
          onChange={(e) =>
            props.setConsumo({
              ...props.consumo,
              aviao: {
                ...props.consumo.aviao,
                origem: e.target.value,
              },
            })
          }
        />
      </section>
      <section className="destination__input">
        <input
          className="text__input"
          type="text"
          placeholder="Destino"
          onChange={(e) =>
            props.setConsumo({
              ...props.consumo,
              aviao: {
                ...props.consumo.aviao,
                destino: e.target.value,
              },
            })
          }
        />
      </section>
      <section className="round__trip">
        <input
          type="checkbox"
          onChange={(e) =>
            props.setConsumo({
              ...props.consumo,
              aviao: {
                ...props.consumo.aviao,
                idaEVolta: Boolean(e.target.value),
              },
            })
          }
        />
        <span>ida e volta</span>
      </section>
      <section className="fly__number">
        <label>Quantidade de vôos</label>
        <input
          type="number"
          value="0"
          min="0"
          onChange={(e) =>
            props.setConsumo({
              ...props.consumo,
              aviao: {
                ...props.consumo.aviao,
                quantidadeVoos: parseInt(e.target.value),
              },
            })
          }
        />
      </section>
    </section>
  );
};

export default AirplaneInput;
