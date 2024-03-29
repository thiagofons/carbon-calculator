/* styles import */
import "../../../styles/main.sass";
import "../../../styles/components/calculator/modules/results.sass";


import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../contexts/ClientContext";

type Result = {
  mes: number;
  ano: number;
  arvores: number;
};

const Results = () => {
  const { data, setData } = useContext(ClientContext);

  return (
    <section className="results">
      <header>
        <h2>Resultados</h2>
      </header>

      <main className="results__data box">
        <section className="result total__month">
          <h3>Emissões do mês</h3>
          <div className="result__data">
            <span className="result__data__number">{data.total.mes.toFixed(2).replace(".", ",")}</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
        </section>
        <section className="result trees">
          <h3>Compensação do mês</h3>
          <div className="result__data">
            <span className="result__data__number">{data.total.arvores.toFixed(0)}</span>
            <span className="consumption__unit">árvores</span>
          </div>
        </section>

        <section className="result total__year">
          <h3>Estimativa do ano</h3>
          <div className="result__data">
            <span className="result__data__number">{data.total.ano.toFixed(2).replace(".", ",")}</span>
            <span className="consumption__unit">t CO&#8322;e</span>
          </div>
          
        </section>

        
      </main>
    </section>
  );
};

export default Results;
