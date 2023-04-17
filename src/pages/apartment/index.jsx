import Header from "../../components/header";
import Footer from "../../components/footer";
import { useParams, Navigate } from "react-router-dom";
import apartmentList from "../../datas/logements.json";
import ImageSlider from "../../components/imageSlider";
import CollapseItemList from "../../components/collapseItemList";
import Tag from "../../components/tag";
import StarScore from "../../components/starScore";
import UserProfile from "../../components/userprofile";

function Apartment() {
  const { apartId } = useParams();
  let isValid = false;
  let apartment = {};

  apartmentList.forEach((apart) =>
    apartId === apart.id ? ((isValid = true), (apartment = apart)) : null
  );

  const collapseInfo = [
    {
      id: "collapseInfo-1",
      title: "Description",
      content: apartment.description,
    },
    {
      id: "collapseInfo-2",
      title: "Équipements",
      content: apartment.equipments,
    },
  ];

  if (!isValid) {
    return (
      <div>
        <Navigate to="/error" />
      </div>
    );
  }

  return (
    <div className="kasa-apartment-page">
      <div className="container">
        <Header />
        <ImageSlider pictures={apartment.pictures} title={apartment.title} />
        <div className="apartment-info">
          <div>
            <h2 className="title">{apartment.title}</h2>
            <p className="subtitle">{apartment.location}</p>
            <ul className="apartment-tags">
              {apartment.tags.map((elem, index) => (
                <Tag key={index} name={elem} />
              ))}
            </ul>
          </div>
          <div className="flex bottom-info">
            <UserProfile
              name={apartment.host.name}
              image={apartment.host.picture}
            />
            <StarScore maxScore={5} currentScore={parseInt(apartment.rating)} />
          </div>
        </div>
        <CollapseItemList infoTable={collapseInfo} />
      </div>
      <Footer />
    </div>
  );
}

export default Apartment;
