/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/add_button.sass";
import { useContext } from "react";
import { ClientContext } from "../contexts/ClientContext";
import { GlobalContext } from "../contexts/GlobalContext";

type AddButtonProps = {
  value: number;
};

const AddButton = (props: AddButtonProps) => {
  const { fatores } = useContext(GlobalContext);
  const { data, setData } = useContext(ClientContext);

  const calcularNovoValor = () => {
    const mes = (data.total.mes + props.value) / 1000;
    const arvores = fatores
      ? data.total.arvores + props.value * fatores?.conversaoArvores
      : data.total.arvores;
    const ano = mes * 12;

    setData({
      ...data,
      total: {
        mes: mes,
        arvores: arvores,
        ano: ano,
      },
    });    
  };

  return (
    <button
      className="add__button"
      onClick={(e) => calcularNovoValor()}
    >
      Adicionar ao cálculo
    </button>
  );
};

export default AddButton;
