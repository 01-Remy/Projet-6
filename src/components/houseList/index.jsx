import houseList from "../../datas/logements.json";
import HouseCard from "../houseCard";

function HouseList() {
  return (
    <div>
      <ul className="kasa-house-list">
        {houseList.map(({ id, title, cover }) => (
          <li key={id}>
            <HouseCard title={title} cover={cover} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
