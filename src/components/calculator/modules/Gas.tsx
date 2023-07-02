/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/gas.sass";
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../contexts/ClientContext";

type Consumo = {
  gasEncanado: number;
  butijoes: number;
};

const Gas = () => {
  const { data, setData } = useContext(ClientContext);
  const [consumo, setConsumo] = useState<Consumo>({
    gasEncanado: 0,
    butijoes: 0,
  });

  useEffect(() => {
    setData({
      ...data,
      inventario: {
        ...data.inventario,
        gas: {
          mes: consumo.gasEncanado + consumo.butijoes,
          ano: (consumo.gasEncanado + consumo.butijoes) * 12,
        },
      },
    });
  }, [consumo]);

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
                setConsumo({
                  ...consumo,
                  gasEncanado: parseFloat(
                    !isNaN(parseFloat(e.target.value)) ? e.target.value : "0"
                  ),
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
              onChange={(e) => {
                setConsumo({
                  ...consumo,
                  butijoes: parseFloat(!isNaN(parseFloat(e.target.value)) ? e.target.value : "0"),
                });
              }}
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </div>
        <div className="box__results">
          <div className="date__result">
            <h4>Mês</h4>
            <span className="consumption__value">
              {data.inventario.gas.mes.toFixed(2)}
            </span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          <div className="date__result">
            <h4>Ano</h4>
            <span className="consumption__value">
              {data.inventario.gas.ano.toFixed(2)}
            </span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Gas;
