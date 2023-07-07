/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/trash_input.sass";

import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";

type TrashInputProps = {
  consumo: number;
  setConsumo: (c: number) => void;
};

const TrashInput = (props: TrashInputProps) => {
  const { fatores, dataAtual } = useContext(GlobalContext);

  const consumption = (valor: number) => {
    if(fatores) {
      switch (dataAtual.mes) {
        case 0:
          return fatores.residuos.jan * valor;
        case 1:
          return fatores.residuos.feb * valor;
        case 2:
          return fatores.residuos.mar * valor;
        case 3:
          return fatores.residuos.apr * valor;
        case 4:
          return fatores.residuos.may * valor;
        case 5:
          return fatores.residuos.jun * valor;
        case 6:
          return fatores.residuos.jul * valor;
        case 7:
          return fatores.residuos.aug * valor;
        case 8:
          return fatores.residuos.sep * valor;
        case 9:
          return fatores.residuos.oct * valor;
        case 10:
          return fatores.residuos.nov * valor;
        case 11:
          return fatores.residuos.dec * valor;
        default:
          return 0;
      }
    }
    else {
      return 0;
    }
    
  };

  return (
    <div className="trash__input">
      <label>Resíduos</label>
      <input
        type="text"
        className="text__input methane__consumption"
        placeholder="kg"
        onChange={(e) => {
          props.setConsumo(
            consumption(parseFloat(e.target.value ? e.target.value : "0"))
          );
          console.log(
            consumption(parseFloat(e.target.value ? e.target.value : "0"))
          );
        }}
      />
    </div>
  );
};

export default TrashInput;
