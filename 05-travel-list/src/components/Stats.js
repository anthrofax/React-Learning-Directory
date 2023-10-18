export default function Stats({ items }) {
  if (!items.length) return <p className="stats">Tambahkan barang baru ke packing list kamu. 🚀</p>;

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed === true).length;
  const packedPercentage = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      <em>{packedPercentage === 100 ? "Kamu sudah siap untuk pergi 🛩" : `Kamu memiliki ${totalItems} barang dalam daftar mu, dan kamu sudah mengemas ${packedItems} (${packedPercentage}%)`}</em>
    </footer>
  );
}
