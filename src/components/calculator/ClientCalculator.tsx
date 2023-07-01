import { useEffect, useState } from "react";

/* styles import */
import "../../styles/main.sass";
import "../../styles/components/calculator/client_calculator.sass";

import DateSelector from "./modules/DateSelector";
import ElectricEnergy from "./modules/ElectricEnergy";
import WaterConsumption from "./modules/WaterConsumption";

const ClientCalculator = () => {
  const factors = {

  }

  return (
    <main className="client__calculator">
      <section className="date">
        <DateSelector />
      </section>
      <section className="calculator">
        <ElectricEnergy />
        <WaterConsumption />
      </section>
    </main>
  );
};

export default ClientCalculator;
