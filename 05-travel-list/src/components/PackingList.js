import { useState } from "react";
import Item  from "./Item";

export default function PackingList({ items, onDeleteItem, onTogglePack, onClearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.desc.localeCompare(b.desc));

  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onTogglePack={onTogglePack} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Urutkan berdasarkan urutan input barang</option>
          <option value="description">Urutkan berdasarkan abjad dari deskripsi barang</option>
          <option value="packed">Urutkan berdasarkan urutan pengemasan barang</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
