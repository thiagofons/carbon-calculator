/* styles import */
import "../../../styles/main.sass";
import "../../../styles/assets/add_button.sass"

type AddButtonProps = {
  action: void;
};

const AddButton = (props: AddButtonProps) => {
  return (
    <button className="add__button" onClick={(e) => props.action}>
      Adicionar ao cálculo
    </button>
  );
};

export default AddButton;
