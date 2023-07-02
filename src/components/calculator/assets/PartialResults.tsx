/* styles import */
import "../../../styles/main.sass";

type PartialResultProps = {
  month: number;
  year: number;
};

const PartialResults = (props: PartialResultProps) => {
  return (
    <section className="box__results">
      <div className="date__result">
        <h4>Mês</h4>
        <span className="consumption__value">
          {props.month.toFixed(2)}
        </span>
        <span className="consumption__unit">t CO&#8322;e</span>
      </div>
      <div className="date__result">
        <h4>Ano</h4>
        <span className="consumption__value">
          {props.year.toFixed(2)}
        </span>
        <span className="consumption__unit">t CO&#8322;e</span>
      </div>
    </section>
  );
};

export default PartialResults;
