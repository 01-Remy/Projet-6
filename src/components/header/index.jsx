import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo Kasa"></img>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">À propos</Link>
        <Link to="/error">error-temp</Link>
      </nav>
    </header>
  );
}

export default Header;
