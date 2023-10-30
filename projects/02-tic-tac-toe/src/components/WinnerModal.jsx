import { Square } from "./Square";

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return;
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? "Empate" : "Ganó " + winner}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>OTRA VEZ!</button>
        </footer>
      </div>
    </section>
  );
};
