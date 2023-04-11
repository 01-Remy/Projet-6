import CollapseItem from "../collapseItem";
import "../../sass/CollapseItemList.scss";

function CollapseItemList({ infoTable }) {
  return (
    <div>
      <ul className="kasa-dropdown-list">
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
