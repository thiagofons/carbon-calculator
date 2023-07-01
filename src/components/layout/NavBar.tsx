import "../../styles/main.sass"
import "../../styles/components/navbar.sass"

import logo from "../../img/logo-terrazul.png"

const NavBar = () => {  
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Instituto Terrazul" />
      </div>
      <ul className="links">
        
      </ul>
    </nav>
  )
}

export default NavBar;