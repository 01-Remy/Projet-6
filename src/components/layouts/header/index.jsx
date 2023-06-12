import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

function Header() {
  return (
    <header className="kasa-header">
      <img src={logo} alt="Logo Kasa"></img>
      <nav>
        <Link to="/kasa" className="home-link">
          Accueil
        </Link>
        <Link to="/kasa/a-propos" className="about-link">
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
