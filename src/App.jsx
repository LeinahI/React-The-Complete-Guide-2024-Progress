import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

// Initialize a 3x3 game board with all cells set to null
const initGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  
  //Create a new gameBoard array by using the spread operator to make a deep copy of the initGameBoard array. 
  //This ensures that the new gameBoard array is a separate copy from the original initGameBoard array, 
  //and any changes made to the new array will not affect the original array.
  let gameBoard = [...initGameBoard.map((array) => [...array])];

  // Loop through each turn in the game
  for (const turn of gameTurns) {
    // Destructure the turn object to get the square and player
    const { square, player } = turn;
    const { row, col } = square;

    // Update the game board with the player's symbol at the specified row and column
    gameBoard[row][col] = player;
  }

  // Initialize the winner variable
  let winner;

  // Loop through each winning combination
  for (const combination of WINNING_COMBINATIONS) {
    // Retrieve the symbol at the position specified by the row and column of the first element in the combination array
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];

    // Retrieve the symbol at the position specified by the row and column of the second element in the combination array
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];

    // Retrieve the symbol at the position specified by the row and column of the third element in the combination array
    const thirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];

    // Check if there is a winner based on the symbols in the current combination
    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      // Update the winner variable if a winning combination is found
      winner = firstSquareSymbol;
    }
  }

  // Check if the number of game turns is 9 and there is no winner
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  // Define a function called handleRematch
  function handleRematch() {
    // Set the game turns array to an empty array
    setGameTurns([]);
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* Player 1 */}
          <Player
            initName={"Player 1"}
            symbol={"X"}
            isActive={activePlayer === "X"}
          />
          {/* Player 2 */}
          <Player
            initName={"Player 2"}
            symbol={"O"}
            isActive={activePlayer === "O"}
          />
        </ol>
        {/* If there is a winner or a draw, render the GameOver component with the handleRematch function to allow for a rematch */}
        {(winner || hasDraw) && (
            <GameOver onRematch={handleRematch} winner={winner} />
        )}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
