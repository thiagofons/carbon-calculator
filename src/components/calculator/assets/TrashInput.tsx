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
  const { fatores } = useContext(GlobalContext);

  return (
    <div className="trash__input">
      <label>Resíduos</label>
      <input
        type="text"
        className="text__input methane__consumption"
        placeholder="kg"
        onChange={(e) =>
          props.setConsumo(
            parseFloat(
              !isNaN(parseFloat(e.target.value.replace(".", ","))) ? e.target.value.replace(".", ",") : "0"
            ) * fatores.residuos
          )
        }
      />
    </div>
  );
};

export default TrashInput;
