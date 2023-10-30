import { useState } from "react";
import confetti from "canvas-confetti";
import { Square } from "./components/Square";
import { TURNS, WINNERS_COMBOS } from "./constantes.js";
import { WinnerModal } from "./components/WinnerModal";
import { resetGameToStorage, saveGameToStorage } from "./logic/storage";

// eslint-disable-next-line react/prop-types

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(window.localStorage.getItem("board"))
      : Array(9).fill(null);
  });
  const [winner, setWinner] = useState(null);

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ? window.localStorage.getItem("turn") : TURNS.X;
  });

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index]) return;
    if (winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar cambios de la partida
    console.log(newBoard, newTurn);
    saveGameToStorage({ newBoard, newTurn });
    setBoard(newBoard);

    // Verificar empate
    checkEndGame(newBoard);

    // Verificar ganador
    checkWinner(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setTurn(TURNS.X);
    setWinner(null);
    setBoard(Array(9).fill(null));

    // Eliminar datos guardados
    resetGameToStorage();
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
        confetti();
      }
    }
    // Devuelve null si no hay ganador
    return null;
  };

  return (
    <main className="board">
      <h1>TIC TAC TOE</h1>
      <button onClick={resetGame}>Reiniciar juego</button>
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

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
