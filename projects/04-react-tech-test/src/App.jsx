import { FactCard } from "./components/FactCard";
import "./style.css";

export function App() {
  return (
    <main className="app-container">
      <header className="fact-card-header">
        <img src="dog.svg" alt="dog svg image" />
        <h1>¡Hechos aleatorios de perros!</h1>
        <img src="dog.svg" alt="dog svg image" />
      </header>
      <FactCard />
    </main>
  );
}
