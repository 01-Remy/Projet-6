function HouseCard({ title, cover }) {
  return (
    <div className="kasa-house-card">
      <img src={cover} alt={`${title} cover`}></img>
      <span>{title}</span>
    </div>
  );
}

export default HouseCard;
