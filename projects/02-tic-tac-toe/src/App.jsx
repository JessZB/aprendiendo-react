import { useState } from "react";

const TURNS = {
  X: "x",
  O: "o",
};

const WINNERS_COMBOS = [
  // horizontal
  [0, 1, 2],
  [3, 5, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

// eslint-disable-next-line react/prop-types
const Square = ({ children, isSelected, updateBoard, index }) => {
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div
      onClick={handleClick}
      className={`square ${!isSelected || "is-selected"}`}
    >
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const [turn, setTurn] = useState(TURNS.X);

  const updateBoard = (index) => {
    if (board[index]) return;
    if (winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Verificar ganador
    checkWinner(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const checkWinner = (boardToCheck) => {
    // Se revisan las combinaciones ganadoras
    // Revisando si X u O ganó
    for (const combo of WINNERS_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        setWinner(boardToCheck[a]);
        console.log(winner);
      }
    }
    // Devuelve null si no hay ganador
    return null;
  };

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>

      <section className="game">
        {board.map((_, index) => {
          return (
            <Square updateBoard={updateBoard} key={index} index={index}>
              {board[index]}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
