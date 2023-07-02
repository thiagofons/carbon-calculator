import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/trash.sass";
import { ClientContext } from "../contexts/ClientContext";

const Trash = () => {
  const { data, setData } = useContext(ClientContext);

  return (
    <section className="box trash">
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
                setData({
                  ...data,
                  inventario: {
                    ...data.inventario,
                    residuos: {
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
        </div>
        <div className="box__results">
          <div className="date__result">
            <h4>Mês</h4>
            <span className="consumption__value">{data.inventario.residuos.mes.toFixed(2)}</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          <div className="date__result">
            <h4>Ano</h4>
            <span className="consumption__value">{data.inventario.residuos.ano.toFixed(2)}</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Trash;
