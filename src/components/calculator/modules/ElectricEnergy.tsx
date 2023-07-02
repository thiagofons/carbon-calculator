import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/electric_energy.sass";
import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";

const ElectricEnergy = () => {
  const { data, setData } = useContext(ClientContext);

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
              className="text__input"
              placeholder="KWh"
              onChange={(e) => {
                setData({
                  ...data,
                  inventario: {
                    ...data.inventario,
                    energiaEletrica: {
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
          month={data.inventario.energiaEletrica.mes}
          year={data.inventario.energiaEletrica.ano}
        />
      </main>
    </section>
  );
};

export default ElectricEnergy;
