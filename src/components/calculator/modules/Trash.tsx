import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/trash.sass";

import { ClientContext } from "../contexts/ClientContext";
import PartialResults from "../assets/PartialResults";
import AddButton from "../assets/AddButton";

const Trash = () => {
  const { data, setData } = useContext(ClientContext);

  return (
    <section className="box trash">
      <header className="box__header">
        <h3>Geração de resíduos</h3>
      </header>
      <section className="box__body">
        <section className="consumption">
          <div>
            <label>Resíduos do Mês</label>
            <input
              type="text"
              className="text__input methane__consumption"
              placeholder="kg"
              onChange={(e) => {
                setData({
                  ...data,
                  inventario: {
                    ...data.inventario,
                    residuos: {
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
          <AddButton value={data.inventario.residuos.mes} />
        </section>
        <PartialResults
          month={data.inventario.residuos.mes}
          year={data.inventario.residuos.ano}
        />
      </section>
    </section>
  );
};

export default Trash;
