import { useState } from "react";
import "../../sass/CollapseItem.scss";

function CollapseItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isActif, setActif] = useState(false);

  return (
    <li className="kasa-collapsible">
      {isOpen ? (
        <div>
          <button
            className={isActif ? "actif" : null}
            type="button"
            onClick={() => {
              setIsOpen(false);
              setActif(false);
            }}
          >
            {title}
          </button>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            onClick={() => {
              setIsOpen(true);
              setActif(true);
            }}
          >
            {title}
          </button>
        </div>
      )}
    </li>
  );
}

export default CollapseItem;
