import { useState } from "react";
import "../../styles/components/calculator/client_calculator.sass"

import DateSelector from "./modules/DateSelector";

const ClientCalculator = () => {

  return (
    <main className="client__calculator">
      <DateSelector />
    </main>
  )
}

export default ClientCalculator;


