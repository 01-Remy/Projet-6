import "../../sass/Card.scss";

function HouseCard({ title, cover }) {
  return (
    <li className="kasa-house-card">
      <img src={cover} alt={`${title} cover`}></img>
      <span>{title}</span>
    </li>
  );
}

export default HouseCard;
