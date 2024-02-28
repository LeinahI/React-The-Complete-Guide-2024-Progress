import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEdited] = useState(false);

  function editName() {
    setIsEdited(true);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditing === true) {
    playerName = <input type="text" required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editName}>Edit</button>
    </li>
  );
}