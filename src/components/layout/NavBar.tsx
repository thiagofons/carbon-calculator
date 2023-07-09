import "../../styles/main.sass";
import "../../styles/components/layout/navbar.sass";

import logo from "../../img/logo-terrazul.png";



const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="content">
        <div className="logo">
          <img src={logo} alt="Instituto Terrazul" />
        </div>
        <ul className="links">
          <li className="nav__link">
            <a href="http://institutoterrazul.org.br/">HOME</a>
          </li>
          <li className="nav__link">
            <a href="http://institutoterrazul.org.br/quem-somos/">QUEM SOMOS</a>
          </li>
          <li className="nav__link">
            <a href="http://institutoterrazul.org.br/projetos/">PROJETOS</a>
          </li>
          <li className="nav__link">
            <a href="http://www.eadterrazul.org.br/moodle/">EAD</a>
          </li>
          <li className="nav__link">
            <a href="http://institutoterrazul.org.br/comunidades-pelo-clima-2/">COMUNIDADES</a>
          </li>
          <li className="nav__link">
            <a href="http://institutoterrazul.org.br/moeda-social-carbono/">MOEDA</a>
          </li>
          <li className="nav__link">
            <a href="http://institutoterrazul.org.br/calculadora_CO2/">CALCULADORA CO2</a>
          </li>
          <li className="nav__link">
            <a href="https://www.youtube.com/@ITerrazul">YOUTUBE</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
