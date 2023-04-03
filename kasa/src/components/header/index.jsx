import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "../../styles/Header.css";

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo Kasa"></img>
      <nav className="kasa-header-nav">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
      </nav>
    </header>
  );
}

export default Header;
