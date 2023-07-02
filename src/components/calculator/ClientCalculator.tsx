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
import Results from "./modules/Results";
import CalculatorSelector from "./modules/CalculatorSelector";
import { useState } from "react";

const ClientCalculator = () => {
  const [categoriaDeConsumo, setCategoriaDeConsumo] = useState("inventario");

  return (
    <main className="client__calculator">
      <section className="date">
        <DateSelector />
      </section>
      <section>
        <CalculatorSelector
          categoria={categoriaDeConsumo}
          setCategoria={setCategoriaDeConsumo}
        />
      </section>
      <section className="calculator">
        {categoriaDeConsumo === "inventario" && (
          <>
            <ElectricEnergy />
            <WaterConsumption />
            <Gas />
            <Trash />
            <Transportation />
          </>
        )}

        <Event />
      </section>
      <section className="calculator__results">
        <Results />
      </section>
    </main>
  );
};

export default ClientCalculator;
