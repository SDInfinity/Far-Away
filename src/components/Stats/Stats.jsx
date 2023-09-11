import "./stats.css";

const Stats = ({ items }) => {
  if (!items.length)
    return <p className="stats">Start adding items to your list</p>;

  const packedItems = items.filter((item) => item.packed).length;
  const percentageItems = Math.round((packedItems / items.length) * 100);

  return (
    <footer className="stats">
      {percentageItems === 100
        ? "You got everything! Ready to go ✈️"
        : `You have ${items.length} items in your list, and you have already packed ${percentageItems}% .`}
    </footer>
  );
};

export default Stats;
