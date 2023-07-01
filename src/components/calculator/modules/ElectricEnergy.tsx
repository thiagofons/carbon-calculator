import { useEffect, useState } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/electric_energy.sass";

const ElectricEnergy = () => {
  const [consumo, setConsumo] = useState({
    consumo: 0,
    mes: 0,
    ano: 0,
  });

  useEffect(() => {
    setConsumo({
      ...consumo,
      mes: consumo.consumo ? consumo.consumo : 0,
      ano: consumo.consumo ? consumo.consumo * 12 : 0,
    });
  }, [consumo]);

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
              onChange={(e) =>
                setConsumo({ ...consumo, consumo: parseFloat(e.target.value) })
              }
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
