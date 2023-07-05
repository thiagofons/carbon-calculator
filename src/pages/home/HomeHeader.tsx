import "../../styles/pages/home.sass";

import banner from "../../img/banner.jpg";

const HomeHeader = () => {
  return (
    <header className="home__header">
      <header>
        <img className="banner" src={banner} alt="Calculadora de CO2: plante para neutralizar. Calcule suas emissões conosco. Valorize o carbono azul." />
      </header>
      <main>
        <p className="text">
          Esta calculadora verifica as emissões geradas pelo consumo de energia,
          água, gás, geração de resíduos e transporte. Insira os dados
          referentes ao mês que deseja calcular e descubra quanto anda emitindo.
          Nós podemos ajudar a compensar suas emissões.
        </p>
      </main>
    </header>
  );
};

export default HomeHeader;
