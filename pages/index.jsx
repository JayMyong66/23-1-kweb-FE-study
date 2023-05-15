import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Square from "../component/Square.jsx";
import { useState } from "react";

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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({ xIsNext, squares, onPlay }) {
  const [vals, setVal] = useState(Array(9).fill(null));
  const [isMine, setIsMine] = useState(true);

  const handleClick = (idx) => {
    if (vals[idx] || calculateWinner(vals)) {
      return;
    }

    const newVals = vals.slice();
    newVals[idx] = isMine ? "X" : "O";
    onPlay(newVals);
    setVal(newVals);
    setIsMine(!isMine);
  };

  const winner = calculateWinner(vals);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isMine ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div>
        <Square value={vals[0]} onhandleClick={() => handleClick(0)} />
        <Square value={vals[1]} onhandleClick={() => handleClick(1)} />
        <Square value={vals[2]} onhandleClick={() => handleClick(2)} />
      </div>
      <div>
        <Square value={vals[3]} onhandleClick={() => handleClick(3)} />
        <Square value={vals[4]} onhandleClick={() => handleClick(4)} />
        <Square value={vals[5]} onhandleClick={() => handleClick(5)} />
      </div>
      <div>
        <Square value={vals[6]} onhandleClick={() => handleClick(6)} />
        <Square value={vals[7]} onhandleClick={() => handleClick(7)} />
        <Square value={vals[8]} onhandleClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
