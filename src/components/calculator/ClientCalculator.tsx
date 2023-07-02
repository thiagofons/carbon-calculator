/* styles import */
import "../../styles/main.sass";
import "../../styles/components/calculator/client_calculator.sass";

import DateSelector from "./modules/DateSelector";
import ElectricEnergy from "./modules/ElectricEnergy";
import WaterConsumption from "./modules/WaterConsumption";
import Gas from "./modules/Gas";
import Trash from "./modules/Trash";
import Transportation from "./modules/Transportation";
import Event from "./modules/Event";

const ClientCalculator = () => {
  return (
    <main className="client__calculator">
      <section className="date">
        <DateSelector />
      </section>
      <section className="calculator">
        <ElectricEnergy />
        <WaterConsumption />
        <Gas />
        <Trash />
        <Transportation />
        <Event />
      </section>
      
    </main>
  );
};

export default ClientCalculator;
