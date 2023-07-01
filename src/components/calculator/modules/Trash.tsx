import { useState } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/trash.sass";

type Consumo = {
  consumo: number;
  mes: number;
  ano: number;
};

const Trash = () => {
  const [consumo, setConsumo] = useState<Consumo>({
    consumo: 0,
    mes: 0,
    ano: 0,
  });

  return (
    <form className="box trash" action="">
      <header className="box__header">
        <h3>Geração de resíduos</h3>
      </header>
      <section className="box__body">
        <div className="consumption">
          <div>
            <label>Resíduos do Mês</label>
            <input
              type="text"
              className="text__input methane__consumption"
              placeholder="kg"
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
    </form>
  );
};

export default Trash;
