import { useState } from "react";

function CollapseItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="kasa-collapsible">
      <button
        className={isOpen ? "actif" : null}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
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
