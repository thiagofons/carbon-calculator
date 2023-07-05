/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/add_button.sass"
import { useContext } from "react";
import { ClientContext } from "../contexts/ClientContext";
import { GlobalContext } from "../contexts/GlobalContext";

type AddButtonProps = {
  value: number;
};

const AddButton = (props: AddButtonProps) => {
  const { fatores } = useContext(GlobalContext);
  const { data, setData } = useContext(ClientContext);

  return (
    <button
      className="add__button"
      onClick={(e) => {
        setData({
          ...data,
          total: {
            mes: (data.total.mes + props.value) / 1000,
            ano: (data.total.ano + props.value * 12) / 1000,
            arvores:
              (data.total.mes + props.value) * fatores.conversaoParaArvores,
          },
        });
      }}
    >
      Adicionar ao cálculo
    </button>
  );
};

export default AddButton;
