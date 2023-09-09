const Item = ({ description, quantity, packed }) => {
  return (
    <li>
      <p style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </p>
      <button>❌</button>
    </li>
  );
};

export default Item;
