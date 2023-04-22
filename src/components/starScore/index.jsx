import starSvg from "../../assets/star.svg";
import starSvgFull from "../../assets/star-full.svg";

function StarScore({ maxScore, currentScore }) {
  let content = [];

  for (let i = 0; i < maxScore; i++) {
    content.push({
      id: "star-logo-" + i,
      type: i < currentScore ? "full" : null,
    });
  }

  return (
    <ul className="kasa-star-score">
      {content.map((star) => (
        <li key={star.id}>
          <img src={star.type ? starSvgFull : starSvg} alt="logo étoile"></img>
        </li>
      ))}
    </ul>
  );
}

export default StarScore;
