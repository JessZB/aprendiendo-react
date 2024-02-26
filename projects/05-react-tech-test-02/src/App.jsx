import "./App.css";
import { Shows } from "./api/components/Shows";

import { useShows } from "./useShows";

export const App = () => {
  const { shows } = useShows();
  return (
    <div className="page">
      <h1>BUSCADOR DE ALGO :D</h1>
      <header>
        <form>
          <input type="search" name="search" />
          <button type="submit">BUSCAR</button>
        </form>
      </header>
      <main className="show-list">
        <Shows shows={shows} />
      </main>
    </div>
  );
};
