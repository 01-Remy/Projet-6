import { useState } from "react";

function CollapseItem({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="kasa-collapsible">
      <div>
        <button
          className={isOpen ? "actif" : null}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </button>
        {isOpen ? (
          <div className="content">
            <p>{description}</p>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export default CollapseItem;
