import CollapseItem from "../collapseItem";

function CollapseItemList({ infoTable }) {
  return (
    <div>
      <ul className="kasa-collapse-list">
        {infoTable.map(({ id, title, content }) => (
          <li key={id}>
            <CollapseItem title={title} content={content} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CollapseItemList;
