import apartmentList from "../../../datas/logements.json";
import { Link } from "react-router-dom";
import ApartmentCard from "../apartmentCard";

function ApartmentList() {
  return (
    <div>
      <ul className="kasa-apartment-list">
        {apartmentList.map(({ id, title, cover }) => (
          <li key={id}>
            <Link to={"/appartement/" + id}>
              <ApartmentCard title={title} cover={cover} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApartmentList;
