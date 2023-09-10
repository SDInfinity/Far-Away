import { Header, Form, List, Stats } from "./components/index";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Charger", quantity: 1, packed: true },
  ]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]); //no mutation of original array
  }

  function handleDeleteItems(id) {
    setItems(items.filter((item) => id !== item.id));
  }

  return (
    <div className="app">
      <Header />
      <Form handleAddItems={handleAddItems} />
      <List items={items} handleDeleteItems={handleDeleteItems} />
      <Stats />
    </div>
  );
};

export default App;
