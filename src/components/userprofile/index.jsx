function UserProfile({ name, image }) {
  return (
    <div className="kasa-user-profile">
      <div className="user-name">{name}</div>
      <img
        src={image}
        alt={"photo de profil de " + name}
        className="user-image"
      ></img>
    </div>
  );
}

export default UserProfile;
