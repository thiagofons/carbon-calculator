import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/date_selector.sass";
import "aos/dist/aos.css";

import { GlobalContext } from "../contexts/GlobalContext";

const DateSelector = () => {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const { dataAtual, setDataAtual } = useContext(GlobalContext);

  const anos = [];
  for (let ano = 2023; ano <= dataAtual.ano; ano++) {
    anos.push(ano);
  }

  return (
    <section className="box date__selector" data-aos="fade-up">
      <header className="box__header">
        <h3>Período</h3>
      </header>
      <main className="box__body">
        <section className="month">
          <select
            className="date__select month__selector"
            value={dataAtual.mes}
            onChange={(e) =>
              setDataAtual({
                ...dataAtual,
                mes: parseInt(e.target.value),
              })
            }
          >
            {meses.map((mes: string, index: number) => (
              <option value={index} key={mes}>
                {mes}
              </option>
            ))}
          </select>
        </section>
        <section className="year">
          <select
            className="date__select year__selector"
            value={dataAtual.ano}
            onChange={(e) =>
              setDataAtual({
                ...dataAtual,
                ano: parseInt(e.target.value),
              })
            }
          >
            {anos.map((ano: number) => (
              <option value={ano} key={ano}>
                {ano}
              </option>
            ))}
          </select>
        </section>
      </main>
    </section>
  );
};

export default DateSelector;
