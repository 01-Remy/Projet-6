import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import ApartmentList from "../../components/apartmentList";
import bannerImg from "../../assets/homeBanner.png";

function Home() {
  const title = "Chez vous, partout et ailleurs";
  const bannerAlt = "banner-img : plage en bord de montagne sous le brouillard";

  return (
    <div className="kasa-home">
      <div className="container">
        <Header />
        <Banner title={title} image={bannerImg} alt={bannerAlt} />
        <ApartmentList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
