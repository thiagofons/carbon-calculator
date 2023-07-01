import { useState } from "react";
import "../../../styles/components/calculator/modules/date_selector.sass";

const DateSelector = () => {
  const today = new Date();

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

  const [date, setDate] = useState({
    month: meses[today.getMonth()],
    year: today.getFullYear(),
  });

  const anos = [];
  for (let ano = 2023; ano <= date.year; ano++) {
    anos.push(ano);
  }

  return (
    <section className="date__selector">
      <header>
        <h2>Escolha a data</h2>
      </header>
      <main>
        <section className="month">
          <select
            className="date__select month__selector"
            value={date.month}
            onChange={(e) => setDate({ ...date, month: e.target.value })}
          >
            {meses.map((mes: string) => (
              <option value={mes} key={mes}>{mes}</option>
            ))}
          </select>
        </section>
        <section className="year">
          <select
            className="date__select year__selector"
            value={date.year}
            onChange={(e) =>
              setDate({ ...date, year: parseInt(e.target.value) })
            }
          >
            {anos.map((ano: number) => (
              <option value={ano} key={ano}>{ano}</option>
            ))}
          </select>
        </section>
      </main>
    </section>
  );
};

export default DateSelector;