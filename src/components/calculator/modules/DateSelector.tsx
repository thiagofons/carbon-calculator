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
      <div className="month">
        <select
          className="month__selector"
          value={date.month}
          onChange={(e) => setDate({ ...date, month: e.target.value })}
        >
          {meses.map((mes: string) => (
            <option value={mes}>{mes}</option>
          ))}
        </select>
      </div>
      <div className="year">
        <select
          className="year__selector"
          value={date.year}
          onChange={(e) => setDate({ ...date, year: parseInt(e.target.value) })}
        >
          {anos.map((ano: number) => (
            <option value={ano}>{ano}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default DateSelector;
