import { useEffect, useState } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/electric_energy.sass";

type Consumo = {
  consumo: number;
  mes: number;
  ano: number;
};

const ElectricEnergy = () => {
  const [consumo, setConsumo] = useState<Consumo>({
    consumo: 0,
    mes: 0,
    ano: 0,
  });

  return (
    <section className="box electric__energy">
      <header className="box__header">
        <h3>Consumo de energia elétrica</h3>
      </header>
      <main className="box__body">
        <section className="consumption">
          <div className="consumption__input">
            <label>Consumo</label>
            <input
              type="text"
              className="text__input co2__consumption"
              placeholder="KWh"
              onChange={(e) => {
                setConsumo({
                  consumo: parseFloat(e.target.value ? e.target.value : "0"),
                  mes: parseFloat(e.target.value ? e.target.value : "0"),
                  ano: 12 * parseFloat(e.target.value ? e.target.value : "0"),
                });
              }}
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </section>
        <section className="box__results">
          <div className="date__result">
            <h4>Mês</h4>
            <span className="consumption__value">{consumo.mes.toFixed(2)}</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          <div className="date__result">
            <h4>Ano</h4>
            <span className="consumption__value">{consumo.ano.toFixed(2)}</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </section>
      </main>
    </section>
  );
};

export default ElectricEnergy;
