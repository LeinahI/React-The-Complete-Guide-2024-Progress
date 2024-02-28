import Player from "./components/Player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* Player 1 */}
          <Player name={"Player 1"} symbol={"X"} />
          {/* Player 2 */}
          <Player name={"Player 2"} symbol={"O"} />
        </ol>
        GAME BOARD
      </div>
      LOG
    </main>
  );
}

export default App;