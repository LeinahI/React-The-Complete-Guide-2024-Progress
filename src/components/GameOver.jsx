/* Define a React component called GameOver */
export default function GameOver({ winner, onRematch }) {
  return (
    /* Render a div with id "game-over" */
    <div id="game-over">
      {/* Render a heading "Game Over!" */}
      <h2>Game Over!</h2>
      {/* If there is a winner, render their name followed by "wins!" */}
      {winner && <p>{winner} wins!</p>}
      {/* If there is no winner, render "It's a draw!" */}
      {!winner && <p>It's a draw!</p>}
      {/* Render a button for a rematch */}
      <p>
        <button onClick={onRematch}>Rematch!</button>
      </p>
    </div>
  );
}
