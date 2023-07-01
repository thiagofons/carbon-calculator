import { useState } from "react";
import VehicleSelector from "../assets/VehicleSelector";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/transportation.sass";

type TransportationProps = {
  tipoVeiculo: string;
  consumoCombustivel: number;
  origem: string;
  destino: string;
  idaEVolta: boolean;
  quantidadeVoos: number;
};

const Transportation = () => {
  const [consumo, setConsumo] = useState<TransportationProps>({
    tipoVeiculo: "",
    consumoCombustivel: 0,
    origem: "",
    destino: "",
    idaEVolta: false,
    quantidadeVoos: 0,
  });

  return (
    <form className="box transportation" action="">
      <header className="box__header">
        <h3>Transporte</h3>
      </header>
      <main className="box__body">
        <section className="consumption">
          <h4>Combustível</h4>
          <div className="field">
            <label>Tipo de veículo</label>
            <VehicleSelector
              selected={consumo.tipoVeiculo}
              setSelected={(e) => setConsumo({ ...consumo, tipoVeiculo: e })}
            />
          </div>

          <div>
            <label>Consumo</label>
            <input
              className="text__input"
              type="text"
              placeholder="km"
              onChange={(e) =>
                setConsumo({
                  ...consumo,
                  consumoCombustivel: parseFloat(
                    e.target.value ? e.target.value : "0"
                  ),
                })
              }
            />
          </div>
          <button className="add__button">Adicionar ao cálculo</button>
        </section>
        <section className="consumption">
          <h4>Viagens aéreas</h4>

          <div className="travel__data">
            <div className="origin__input">
              <input
                className="text__input"
                type="text"
                placeholder="Origem"
                onChange={(e) =>
                  setConsumo({ ...consumo, origem: e.target.value })
                }
              />
            </div>
            <div className="destiny__input">
              <input
                className="text__input"
                type="text"
                placeholder="Destino"
                onChange={(e) =>
                  setConsumo({ ...consumo, destino: e.target.value })
                }
              />
              <ul className="destiny__input__rec"></ul>
            </div>
          </div>
          <div className="round__trip">
            <input
              type="checkbox"
              onChange={(e) =>
                setConsumo({
                  ...consumo,
                  idaEVolta: e.target.checked ? true : false,
                })
              }
            />
            <span>ida e volta</span>
          </div>
          <div className="field fly__number">
            <label>Quantidade de vôos</label>
            <input
              type="number"
              value="0"
              min="0"
              onChange={(e) =>
                setConsumo({
                  ...consumo,
                  quantidadeVoos: parseInt(e.target.value),
                })
              }
            />
          </div>

          <button className="add__button">Adicionar ao cálculo</button>
        </section>

        <section className="box__results">
          <div className="date__result">
            <h4>Mês</h4>
            <span className="consumption__value">0.00</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          <div className="date__result">
            <h4>Ano</h4>
            <span className="consumption__value">0.00</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </section>
      </main>
    </form>
  );
};

export default Transportation;
