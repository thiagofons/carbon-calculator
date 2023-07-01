/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/vehicle_selector.sass";

type VehicleSelectorProps = {
  selected: string;
  setSelected: (s: string) => void;
};

const VehicleSelector = (props: VehicleSelectorProps) => {
  return (
    <select
      className="selector vehicle__selector"
      onChange={(e) => props.setSelected(e.target.value)}
    >
      <option value="">Escolha um veículo</option>
      <option value="gasolina14">Carro a Gasolina (até 1.4)</option>
      <option value="gasolina15a20">Carro a Gasolina (1.5 a 2.0)</option>
      <option value="gasolina20">Carro a Gasolina (acima de 2.0)</option>
      <option value="alcool14">Carro a Álcool (até 1.4)</option>
      <option value="alcool15a20">Carro a Álcool (1.5 a 2.0)</option>
      <option value="alcool20">Carro a Álcool (acima de 2.0)</option>
      <option value="gnv">Carro Gás Natural (GNV)</option>
      <option value="pickup">Pick-up (diesel)</option>
      <option value="taxi">Táxi</option>
      <option value="onibus">Ônibus</option>
    </select>
  );
};

export default VehicleSelector;
