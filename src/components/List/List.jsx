import "./list.css";
import Item from "../Item";

const List = ({ items, handleDeleteItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...item} handleDeleteItems={handleDeleteItems} />
        ))}
      </ul>
    </div>
  );
};

export default List;
