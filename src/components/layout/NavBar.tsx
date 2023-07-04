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
        <ul className="links"></ul>
      </div>
    </nav>
  );
};

export default NavBar;
