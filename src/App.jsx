import Player from "./components/Player";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx";

// The PLAYERS object contains the names for the players "X" and "O" in a tic-tac-toe game
const PLAYERS = {
  X: "Player 1",
  O: "Player 2",
};

// Initialize a 3x3 game board with all cells set to null
const INIT_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function deriveActivePlayer(gameTurns) { 
  let currentPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  //Create a new gameBoard array by using the spread operator to make a deep copy of the initGameBoard array.
  //This ensures that the new gameBoard array is a separate copy from the original initGameBoard array,
  //and any changes made to the new array will not affect the original array.
  let gameBoard = [...INIT_GAME_BOARD.map((array) => [...array])];

  // Loop through each turn in the game
  for (const turn of gameTurns) {
    // Destructure the turn object to get the square and player
    const { square, player } = turn;
    const { row, col } = square;

    // Update the game board with the player's symbol at the specified row and column
    gameBoard[row][col] = player;
  }

  return gameBoard;
}

function deriveWinner(gameBoard, players) {
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
      // Assign the player corresponding to the symbol at the first position of the winning combination to the winner variable
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

function App() {
  const [players,   setPlayers] = useState(PLAYERS); // Initialize state variable players using the useState hook, setting its initial value to the PLAYERS object
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns); // Create a game board based on the game turns
  const winner = deriveWinner(gameBoard, players); // Determine the winner based on the game board and players
  const hasDraw = gameTurns.length === 9 && !winner; // Check if the number of game turns is 9 and there is no winner

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

  // Define a function handlePlayerNameChange that takes symbol and newName as parameters
  function handlePlayerNameChange(symbol, newName) {
    // Update the players state using the setPlayers function
    setPlayers((prevPlayers) => {
      // Return a new object with the previous players' data and the updated name for the specified symbol
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          {/* Player 1 */}
          {/* Render the Player component with initial name "Player 1", symbol "X", and isActive condition based on activePlayer state
          and Pass the handlePlayerNameChange function as the onChangeName prop */}
          <Player
            initName={PLAYERS.X}
            symbol={"X"}
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          {/* Player 2 */}
          {/* Render the Player component with initial name "Player 2", symbol "O", and isActive condition based on activePlayer state
           Pass the handlePlayerNameChange function as the onChangeName prop */}
          <Player
            initName={PLAYERS.O}
            symbol={"O"}
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
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
