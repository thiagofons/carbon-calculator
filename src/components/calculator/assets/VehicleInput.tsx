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
                !isNaN(parseFloat(e.target.value.replace(".", ","))) ? e.target.value : "0"
              ) * seletor(tipoVeiculo)
            )
          }
        />
      </div>
    </section>
  );
};

export default VehicleInput;
