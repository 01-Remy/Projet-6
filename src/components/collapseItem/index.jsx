import { useState } from "react";

function CollapseItem({ title, content }) {
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
            {typeof content === "object" ? (
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
    </li>
  );
}

export default CollapseItem;
