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
      <option value="gasolinaAte1_4">Carro a Gasolina (até 1.4)</option>
      <option value="gasolinaDe1_5Ate2_0">Carro a Gasolina (1.5 a 2.0)</option>
      <option value="gasolinaAcima2_0">Carro a Gasolina (acima de 2.0)</option>
      <option value="alcoolAte1_4">Carro a Álcool (até 1.4)</option>
      <option value="alcoolDe1_5Ate2_0">Carro a Álcool (1.5 a 2.0)</option>
      <option value="alcoolAcima2_0">Carro a Álcool (acima de 2.0)</option>
      <option value="gasNatural">Carro Gás Natural (GNV)</option>
      <option value="diesel">Pick-up (diesel)</option>
      <option value="taxi">Táxi</option>
      <option value="onibus">Ônibus</option>
    </select>
  );
};

export default VehicleSelector;
