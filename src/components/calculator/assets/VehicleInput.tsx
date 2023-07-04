/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/vehicle_selector.sass";

import VehicleSelector from "./VehicleSelector";

import { GlobalContext } from "../contexts/GlobalContext";
import { useContext, useState } from "react";

type VehicleInputProps = {
  consumo: number;
  setConsumo: (c: number) => void;
};

const VehicleInput = (props: VehicleInputProps) => {
  const { fatores } = useContext(GlobalContext);

  const [tipoVeiculo, setTipoVeiculo] = useState("");

  const seletor = (nome: string) => {
    switch (nome) {
      case "veiculoGasolina":
        return fatores.transporte.veiculoGasolina;
      case "veiculoGNV":
        return fatores.transporte.veiculoGNV;
      case "veiculoAlcool":
        return fatores.transporte.veiculoAlcool;
      case "veiculoDiesel":
        return fatores.transporte.veiculoAlcool;
      case "motoGasolina":
        return fatores.transporte.motoGasolina;
      case "motoAlcool":
        return fatores.transporte.motoAlcool;
      default:
        return 0;
    }
  };

  return (
    <section className="consumption vehicle__input">
      <h4>Combustível</h4>
      <div className="field">
        <label>Tipo de veículo</label>
        <VehicleSelector selected={tipoVeiculo} setSelected={setTipoVeiculo} />
      </div>
      <div className="field">
        <label>Consumo</label>
        <input
          className="text__input"
          type="text"
          placeholder="km"
          disabled={!tipoVeiculo}
          onChange={(e) =>
            props.setConsumo(
              parseFloat(
                !isNaN(parseFloat(e.target.value)) ? e.target.value : "0"
              ) * seletor(tipoVeiculo)
            )
          }
        />
      </div>
    </section>
  );
};

export default VehicleInput;
