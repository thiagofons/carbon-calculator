import "../../../styles/components/calculator/modules/date_selector.sass"

type DateSelectorProps = {
  month: number;
  year: number;
};

const DateSelector = (props: DateSelectorProps) => {
  const date = new Date();

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

  const anoAtual = date.getFullYear();
  const anos = [];
  for (let ano = 2023; ano <= anoAtual; ano++) {
    anos.push(ano);
  }

  return (
    <section className="date__selector">
      <div className="month">
        <select className="month__selector">
          {meses.map((mes: string) => (
            <option value={mes}>{mes}</option>
          ))}
        </select>
      </div>
      <div className="year">
        <select className="year__selector">
          {anos.map((ano: number) => (
            <option value={ano}>{ano}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default DateSelector;
