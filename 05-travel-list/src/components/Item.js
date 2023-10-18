export default function Item({ item, onDeleteItem, onTogglePack }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed} onChange={() => onTogglePack(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.desc}
      </span>
      <button
        onClick={() => {
          onDeleteItem(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
