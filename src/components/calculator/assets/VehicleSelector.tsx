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
      <option value="veiculoGasolina">Veículo a Gasolina</option>
      <option value="veiculoGNV">Veículo a GNV</option>
      <option value="veiculoAlcool">Veículo a Álcool</option>
      <option value="veiculoDiesel">Veículo a Diesel</option>
      <option value="motoGasolina">Moto a Gasolina</option>
      <option value="motoAlcool">Moto a Álcool</option>
    </select>
  );
};

export default VehicleSelector;
