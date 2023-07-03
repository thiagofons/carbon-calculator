/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/calculator_selector.sass";

type CalculatorSelectorProps = {
  categoria: string;
  setCategoria: (c: string) => void;
};
const CalculatorSelector = (props: CalculatorSelectorProps) => {
  return (
    <section className="box calculator__selector">
      <header className="box__header">
        <h3>Categoria de consumo</h3>
      </header>
      <main className="box__body">
        <select
          className="selector"
          onChange={(e) => props.setCategoria(e.target.value)}
          value={props.categoria}
        >
          <option value="inventario">Inventário domiciliar</option>
          <option value="evento">Adição de evento</option>
        </select>
      </main>
    </section>
  );
};

export default CalculatorSelector;
