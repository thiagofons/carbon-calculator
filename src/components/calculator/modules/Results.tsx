/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/transportation.sass";

const Results = () => {
  return (
    <section className="results">
      <header>
        <h2>Resultados</h2>
      </header>

      <main className="results__data box">
        <section className="total__month">
          <h3>Emissões totais do mês</h3>
          <span>0.00</span>
          <span className="consumption__unit">t CO&#8322;e</span>
        </section>

        <section className="total__year">
          <h3>Emissões totais do ano</h3>
          <span>0.00</span>
          <span className="consumption__unit">t CO&#8322;e</span>
        </section>

        <section className="trees">
          <h3>Árvores a serem planatas</h3>
          <span>0</span>
          <span className="consumption__unit">t CO&#8322;e</span>
        </section>
      </main>

      <footer>
        <section className="results__compensate">
          <h3>Como você pode compensar seu consumo de CO&#8322;</h3>
        </section>
        <section className="results__invite">
          <h3>Venha para um plantio comunitário!</h3>
        </section>
      </footer>
    </section>
  );
};

export default Results;
