/* styles import */
import "../../../styles/components/calculator/assets/partial_results.sass";

type PartialResultProps = {
  month: number;
  year: number;
};

const PartialResults = (props: PartialResultProps) => {
  return (
    <section className="partial__results">
      <div className="date__result">
        <h4>Mês</h4>
        <span className="consumption__value">
          {(props.month / 1000).toFixed(2).replace(".", ",")}
        </span>
        <span className="consumption__unit">t CO&#8322;e</span>
      </div>
      <div className="date__result">
        <h4>Ano</h4>
        <span className="consumption__value">
          {(props.year / 1000).toFixed(2).replace(".", ",")}
        </span>
        <span className="consumption__unit">t CO&#8322;e</span>
      </div>
    </section>
  );
};

export default PartialResults;
