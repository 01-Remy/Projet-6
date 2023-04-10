import logo from "../../assets/logoWhite.svg";
import "../../sass/Footer.scss";

function Footer() {
  return (
    <footer className="kasa-footer">
      <img src={logo} alt="Logo Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
