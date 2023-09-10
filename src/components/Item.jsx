const Item = ({ description, quantity, packed, id, handleDeleteItems }) => {
  return (
    <li>
      <p style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </p>
      <button onClick={() => handleDeleteItems(id)}>❌</button>
    </li>
  );
};

export default Item;
