import "./list.css";
import Item from "../Item";

const List = ({ items, handleDeleteItems, handleToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            {...item}
            handleDeleteItems={handleDeleteItems}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
