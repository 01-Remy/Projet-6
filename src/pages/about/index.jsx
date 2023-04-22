import Header from "../../components/header";
import Footer from "../../components/footer";
import Banner from "../../components/banner";
import bannerImg from "../../assets/aboutBanner.png";
import CollapseItemList from "../../components/collapseItemList";
import aboutInfo from "../../datas/about.json";

function About() {
  const bannerAlt =
    "banner-img : une chaîne de montagnes ayant leurs sommets enneigés";

  return (
    <div className="kasa-about">
      <div className="container">
        <Header />
        <Banner image={bannerImg} alt={bannerAlt} />
        <CollapseItemList infoTable={aboutInfo} />
      </div>
      <Footer />
    </div>
  );
}

export default About;
