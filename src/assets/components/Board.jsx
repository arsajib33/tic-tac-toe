/* eslint-disable react/prop-types */
import { useState } from "react";

function Square({ value, onClickSqaure }) {
  return (
    <button
      onClick={onClickSqaure}
      className="bg-white border border-gray-400 h-12 w-12 m-1 leading-9 text-lg"
    >
      {value}
    </button>
  );
}

function Board({ squares, xIsNext, onPlay }) {
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = "Next player" + (xIsNext ? "X" : "O");
  }

  const handleClick = (i) => {
    const nextSquares = squares.slice();
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  return (
    <>
      <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onClickSqaure={() => handleClick(0)} />
        <Square value={squares[1]} onClickSqaure={() => handleClick(1)} />
        <Square value={squares[2]} onClickSqaure={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onClickSqaure={() => handleClick(3)} />
        <Square value={squares[4]} onClickSqaure={() => handleClick(4)} />
        <Square value={squares[5]} onClickSqaure={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onClickSqaure={() => handleClick(6)} />
        <Square value={squares[7]} onClickSqaure={() => handleClick(7)} />
        <Square value={squares[8]} onClickSqaure={() => handleClick(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(i);

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquare = history[history.length - 1];
  const handlePlay = (nextSquares) => {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (move) => {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  };
  const move = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = ` Go to start the game`;
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <>
      <div>
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquare}
            onPlay={handlePlay}
          />
        </div>
        <div>{move}</div>
      </div>
    </>
  );
}

// function calculateWinner(squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6],
//   ];
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i];
//     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
//       return squares[a];
//     }
//   }
//   return null;
// }
