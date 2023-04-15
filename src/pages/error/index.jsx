import { Link, useRouteError } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";

function Error() {
  let error = useRouteError();
  console.error(error);
  return (
    <div>
      <div className="kasa-error container">
        <Header />
        <h2>404 !</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="return">
          Retournez sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Error;
