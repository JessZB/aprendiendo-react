import { FactCard } from "./components/FactCard";
import "./style.css";

export function App() {
  return (
    <main className="app-container">
      <h1>¡Hechos aleatorios de perros!</h1>
      <FactCard />
    </main>
  );
}
