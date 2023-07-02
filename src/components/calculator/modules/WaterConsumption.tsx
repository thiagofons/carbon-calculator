import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/water_consumption.sass";
import { ClientContext } from "../contexts/ClientContext";

const WaterConsumption = () => {
  const { data, setData } = useContext(ClientContext);

  return (
    <section className="box water__consumption">
      <header className="box__header">
        <h3>Consumo de água</h3>
      </header>
      <main className="box__body">
        <section className="consumption">
          <div className="consumption__input">
            <label>Consumo</label>
            <input
              type="text"
              className="text__input"
              placeholder="m&sup3;"
              onChange={(e) => {
                setData({
                  ...data,
                  inventario: {
                    ...data.inventario,
                    agua: {
                      mes: parseFloat(!isNaN(parseFloat(e.target.value)) ? e.target.value : "0"),
                      ano:
                        parseFloat(!isNaN(parseFloat(e.target.value)) ? e.target.value : "0") * 12,
                    },
                  },
                });
              }}
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </section>
        <section className="box__results">
          <div className="date__result">
            <h4>Mês</h4>
            <span className="consumption__value">
              {data.inventario.agua.mes.toFixed(2)}
            </span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          <div className="date__result">
            <h4>Ano</h4>
            <span className="consumption__value">
              {data.inventario.agua.ano.toFixed(2)}
            </span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </section>
      </main>
    </section>
  );
};

export default WaterConsumption;
