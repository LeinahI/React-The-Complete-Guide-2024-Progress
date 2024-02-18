export default function TabButton({ children, onSelect }) {
  console.log("tab btn executing");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
