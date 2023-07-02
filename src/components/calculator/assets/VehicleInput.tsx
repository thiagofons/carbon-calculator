/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/vehicle_selector.sass";
import { TransportationProps } from "../../../interfaces/Transportation";
import VehicleSelector from "./VehicleSelector";

type VehicleInputProps = {
  consumo: TransportationProps;
  setConsumo: (c: TransportationProps) => void;
};

const VehicleInput = (props: VehicleInputProps) => {
  return (
    <section className="vehicle__input">
      <div className="field">
        <label>Tipo de veículo</label>
        <VehicleSelector
          selected={props.consumo.combustivel.tipoVeiculo}
          setSelected={(e) =>
            props.setConsumo({
              ...props.consumo,
              combustivel: {
                ...props.consumo.combustivel,
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
            props.setConsumo({
              ...props.consumo, 
              combustivel = {}
              
            )
          }
        />
      </div>
      <button className="add__button">Adicionar ao cálculo</button>
    </section>
  );
};

export default VehicleInput;
