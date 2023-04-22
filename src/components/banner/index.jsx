function Banner({ title, image, alt }) {
  return (
    <div className="kasa-banner">
      <img src={image} alt={alt}></img>
      {title ? <h2>{title}</h2> : null}
    </div>
  );
}

export default Banner;
