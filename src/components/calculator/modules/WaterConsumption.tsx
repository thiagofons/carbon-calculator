import { useContext } from "react";

import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/water_consumption.sass";
import "aos/dist/aos.css";

import AddButton from "../assets/AddButton";
import { GlobalContext } from "../contexts/GlobalContext";

const WaterConsumption = () => {
  const { data, setData } = useContext(ClientContext);
  const { fatores } = useContext(GlobalContext);

  return (
    <section className="box water__consumption" data-aos="fade-up">
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
                setData(fatores ? {
                  ...data,
                  inventario: {
                    ...data.inventario,
                    agua: {
                      mes:
                        parseFloat(
                          !isNaN(parseFloat(e.target.value))
                            ? e.target.value
                            : "0"
                        ) * fatores?.agua,
                      ano:
                        12 *
                        parseFloat(
                          !isNaN(parseFloat(e.target.value))
                            ? e.target.value
                            : "0"
                        ) *
                        fatores?.agua,
                    },
                  },
                } : data);
              }}
            />
          </div>
          <AddButton value={data.inventario.agua.mes} />
        </section>

        <PartialResults
          month={data.inventario.agua.mes}
          year={data.inventario.agua.ano}
        />
      </main>
    </section>
  );
};

export default WaterConsumption;
