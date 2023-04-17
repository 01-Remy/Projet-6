import CollapseItem from "../collapseItem";

function CollapseItemList({ infoTable }) {
  return (
    <div>
      <ul className="kasa-collapse-list">
        {infoTable.map(({ id, title, content }) => (
          <div key={id}>
            <CollapseItem title={title} content={content} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CollapseItemList;
