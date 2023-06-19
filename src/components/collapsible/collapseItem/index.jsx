import { useState } from "react";
import arrowIcon from "../../../assets/back-arrow.svg";

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const backgroundArrow = {
    backgroundImage: `url(${arrowIcon})`,
  };

  return (
    <div className="kasa-collapsible">
      <button className={isOpen ? "actif" : null} type="button" onClick={() => setIsOpen(!isOpen)}>
        {title}
        <span className="arrow-icon" style={backgroundArrow}></span>
      </button>
      {isOpen ? (
        <div className="content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((elem, index) => (
                <li key={index}>{elem}</li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default CollapseItem;
