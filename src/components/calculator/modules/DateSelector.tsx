import { useContext } from "react";

/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/date_selector.sass";
import { ClientContext } from "../contexts/ClientContext";

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

  const { data, setData } = useContext(ClientContext);

  const anos = [];
  for (let ano = 2023; ano <= data.dataAtual.ano; ano++) {
    anos.push(ano);
  }

  return (
    <section className="box date__selector">
      <header className="box__header">
        <h3>Período</h3>
      </header>
      <main className="box__body">
        <section className="month">
          <select
            className="date__select month__selector"
            value={data.dataAtual.mes}
            onChange={(e) =>
              setData({
                ...data,
                dataAtual: {
                  ...data.dataAtual,
                  mes: parseInt(e.target.value),
                },
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
            value={data.dataAtual.ano}
            onChange={(e) =>
              setData({
                ...data,
                dataAtual: {
                  ...data.dataAtual,
                  ano: parseInt(e.target.value),
                },
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
