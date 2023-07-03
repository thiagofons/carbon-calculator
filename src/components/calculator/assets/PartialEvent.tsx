/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/assets/partial_results.sass";

type PartialEventProps = {
  total: number;
};

const PartialEvent = (props: PartialEventProps) => {
  return (
    <section className="partial__results">
      <div className="date__result">
        <h4>Total</h4>
        <span className="consumption__value">{props.total.toFixed(2).replace(".", ",")}</span>
        <span className="consumption__unit">t CO&#8322;e</span>
      </div>
    </section>
  );
};

export default PartialEvent;
