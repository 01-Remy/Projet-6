import houseList from "../../datas/logements.json";
import HouseCard from "../houseCard";
import "../../sass/HouseList.scss";

function HouseList() {
  return (
    <div>
      <ul className="kasa-house-list">
        {houseList.map(({ id, title, cover }) => (
          <div key={id}>
            <HouseCard title={title} cover={cover} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default HouseList;
