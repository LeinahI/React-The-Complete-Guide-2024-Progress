function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* Player 1 */}
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          {/* Player 2 */}
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;
