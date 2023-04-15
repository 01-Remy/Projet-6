import CollapseItem from "../collapseItem";

function CollapseItemList({ infoTable }) {
  return (
    <div>
      <ul className="kasa-collapse-list">
        {infoTable.map(({ id, title, description }) => (
          <div key={id}>
            <CollapseItem title={title} description={description} />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CollapseItemList;
