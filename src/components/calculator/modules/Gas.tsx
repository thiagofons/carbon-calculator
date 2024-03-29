/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/gas.sass";
import "aos/dist/aos.css";

import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";
import AddButton from "../assets/AddButton";
import { GlobalContext } from "../contexts/GlobalContext";

type Consumo = {
  gasEncanado: number;
  butijoes: number;
};

const Gas = () => {
  const {fatores} = useContext(GlobalContext);
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
    <section className="box gas" data-aos="fade-up">
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
                setConsumo(fatores ? {
                  ...consumo,
                  gasEncanado: parseFloat(
                    !isNaN(parseFloat(e.target.value)) ? e.target.value : "0"
                  ) * fatores?.gas.encanado,
                }: consumo);
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
                setConsumo(fatores ? {
                  ...consumo,
                  butijoes: parseFloat(
                    !isNaN(parseFloat(e.target.value)) ? e.target.value : "0"
                  ) * fatores?.gas.cozinha,
                } : consumo);
              }}
            />
          </div>
          <AddButton value={data.inventario.gas.mes}/>
        </div>
        <PartialResults
          month={data.inventario.gas.mes}
          year={data.inventario.gas.ano}
        />
      </section>
    </section>
  );
};

export default Gas;
