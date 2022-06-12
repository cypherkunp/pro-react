import React, { useState } from 'react';
import Square from './Square';

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(''));
  const [nextPlayer, setNextPlayer] = useState('X');

  const handleSquareOnClick = squareIndex => {
    if (squares[squareIndex]) return;

    const squaresCopy = squares.slice();
    squaresCopy[squareIndex] = nextPlayer;
    setSquares(squaresCopy);
    setNextPlayer(nextPlayer === 'X' ? 'O' : 'X');
  };

  return (
    <div>
      <div className="status">{`Next Player: ${nextPlayer}`}</div>
      <div className="board-row">
        {<Square value={squares[0]} onClick={() => handleSquareOnClick(0)} />}
        {<Square value={squares[1]} onClick={() => handleSquareOnClick(1)} />}
        {<Square value={squares[2]} onClick={() => handleSquareOnClick(2)} />}
      </div>
      <div className="board-row">
        {<Square value={squares[3]} onClick={() => handleSquareOnClick(3)} />}
        {<Square value={squares[4]} onClick={() => handleSquareOnClick(4)} />}
        {<Square value={squares[5]} onClick={() => handleSquareOnClick(5)} />}
      </div>
      <div className="board-row">
        {<Square value={squares[6]} onClick={() => handleSquareOnClick(6)} />}
        {<Square value={squares[7]} onClick={() => handleSquareOnClick(7)} />}
        {<Square value={squares[8]} onClick={() => handleSquareOnClick(8)} />}
      </div>
    </div>
  );
}

export default Board;
