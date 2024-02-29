import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          {/* Player 1 */}
          <Player initName={"Player 1"} symbol={"X"} />
          {/* Player 2 */}
          <Player initName={"Player 2"} symbol={"O"} />
        </ol>
        <GameBoard />
      </div>
      LOG
    </main>
  );
}

export default App;
