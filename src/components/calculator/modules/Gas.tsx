/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/gas.sass";
import { useState } from "react";

type Consumo = {
  gasEncanado: number;
  butijoes: number;
  mes: number;
  ano: number;
};

const Gas = () => {
  const [consumo, setConsumo] = useState<Consumo>({
    gasEncanado: 0,
    butijoes: 0,
    mes: 0,
    ano: 0,
  });
  
  return (
    <section className="box gas">
      <header className="box__header">
        <h3>Consumo de gás de cozinha</h3>
      </header>
      <section className="box__body">
        <div className="consumption">
          <div className="piped__gas">
            <label>Consumo de gás encanado</label>
            <input
              type="text"
              className="text__input"
              placeholder="m&sup3;"
              onChange={(e) => {
                setConsumo({...consumo,
                  gasEncanado: parseFloat(e.target.value ? e.target.value : "0"),
                  mes: parseFloat(e.target.value ? e.target.value : "0"),
                  ano: 12 * parseFloat(e.target.value ? e.target.value : "0"),
                });
              }}
            />
          </div>
          <div className="cylinder__gas">
            <label>Consumo de butijões</label>
            <input
              type="text"
              className="text__input"
              placeholder="número de butijões"
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </div>
        <div className="box__results">
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
        </div>
      </section>
    </section>
  );
};

export default Gas;
