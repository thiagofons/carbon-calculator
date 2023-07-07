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
    if(fatores) {
      switch (nome) {
        case "veiculoGasolina":
          return fatores.transporte.veiculoGasolina;
        case "veiculoGNV":
          return fatores.transporte.veiculoGNV;
        case "veiculoAlcool":
          return fatores.transporte.veiculoAlcool;
        case "veiculoDiesel":
          return fatores.transporte.veiculoDiesel;
        case "motoGasolina":
          return fatores.transporte.motoGasolina;
        case "motoAlcool":
          return fatores.transporte.motoAlcool;
        default:
          return 0;
      }
    }
    else {
      return 0;
    }
    
  };

  const consumo = (categoria: string, valor: number) => {
    return seletor(categoria) * valor;
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
              consumo(
                tipoVeiculo,
                parseFloat(
                  !isNaN(parseFloat(e.target.value)) ? e.target.value : "0"
                )
              )
            )
          }
        />
      </div>
    </section>
  );
};

export default VehicleInput;
