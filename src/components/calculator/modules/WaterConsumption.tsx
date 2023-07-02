import { useContext } from "react";

import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/water_consumption.sass";

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
                      mes: parseFloat(
                        !isNaN(parseFloat(e.target.value))
                          ? e.target.value
                          : "0"
                      ),
                      ano:
                        parseFloat(
                          !isNaN(parseFloat(e.target.value))
                            ? e.target.value
                            : "0"
                        ) * 12,
                    },
                  },
                });
              }}
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </section>

        <PartialResults
          month={data.inventario.agua.mes}
          year={data.inventario.agua.mes}
        />
      </main>
    </section>
  );
};

export default WaterConsumption;
