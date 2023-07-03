/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/event_selector.sass";

type EventSelectorProps = {
  selected: string;
  setSelected: (s: string) => void;
};

const EventSelector = (props: EventSelectorProps) => {
  return (
    <select
      className="selector event__selector"
      onChange={(e) => props.setSelected(e.target.value)}
      value={props.selected}
    >
      <option value="combustivel">Combustível</option>
      <option value="residuos">Resíduos</option>
      {/**
       * <option value="viagem">Viagem de avião</option>
       * */}
    </select>
  );
};

export default EventSelector;
