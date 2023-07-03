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
      <option value="carroGasolinaAte1_4">Carro a Gasolina (até 1.4)</option>
      <option value="carroGasolinaDe1_5Ate2_0">Carro a Gasolina (1.5 a 2.0)</option>
      <option value="carroGasolinaAcima2_0">Carro a Gasolina (acima de 2.0)</option>
      <option value="carroAlcoolAte1_4">Carro a Álcool (até 1.4)</option>
      <option value="carroAlcoolDe1_5Ate2_0">Carro a Álcool (1.5 a 2.0)</option>
      <option value="carroAlcoolAcima2_0">Carro a Álcool (acima de 2.0)</option>
      <option value="carroGasNatural">Carro Gás Natural (GNV)</option>
      <option value="carroDiesel">Pick-up (diesel)</option>
      <option value="carroTaxi">Táxi</option>
      <option value="onibus">Ônibus</option>
    </select>
  );
};

export default VehicleSelector;
