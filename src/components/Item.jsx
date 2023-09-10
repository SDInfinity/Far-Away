const Item = ({
  description,
  quantity,
  packed,
  id,
  handleDeleteItems,
  handleToggleItem,
}) => {
  return (
    <li>
      <input
        type="checkbox"
        value={packed}
        onChange={() => handleToggleItem(id)}
      />
      <p style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </p>
      <button onClick={() => handleDeleteItems(id)}>❌</button>
    </li>
  );
};

export default Item;
