function ApartmentCard({ title, cover }) {
  return (
    <div className="kasa-apartment-card">
      <img src={cover} alt={`${title} cover`}></img>
      <span>{title}</span>
    </div>
  );
}

export default ApartmentCard;
