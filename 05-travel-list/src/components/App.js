import { useState } from "react";
import Logo  from "./Logo";
import Form  from "./Form";
import PackingList  from "./PackingList";
import Stats  from "./Stats";

function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = function (newItem) {
    setItems((items) => [...items, newItem]);
  };

  const deleteItemHandler = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const togglePackHandler = function (id) {
    setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
  };

  const clearListHandler = function () {
    const confirmed = window.confirm("Kamu yakin, ingin menghapus semua daftar barang mu?");

    if (confirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddListItem={addItemHandler} />
      <PackingList items={items} onDeleteItem={deleteItemHandler} onTogglePack={togglePackHandler} onClearList={clearListHandler} />
      <Stats items={items} />
    </div>
  );
}

export default App;
