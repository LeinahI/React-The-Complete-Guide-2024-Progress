import { useState } from "react";

export default function Player({ initName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initName);
  const [isEditing, setIsEdited] = useState(false);

  function editName() {
    setIsEdited((editing) => !editing);
  }

  function handleChangeName(evt) {
    setPlayerName(evt.target.value);
  }

  let displayPlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing === true) {
    displayPlayerName = (
      <input
        type="text"
        value={playerName}
        onChange={handleChangeName}
        required
      />
    );
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {displayPlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={editName}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
