import "./App.css";
import { Shows } from "./components/Shows";

import { useShows } from "./hooks/useShows";
import { useSearch } from "./hooks/useSearch";

export const App = () => {
  const { search, setSearch, error } = useSearch();
  const { shows, getShows } = useShows({ search });

  const handleSubmit = (e) => {
    e.preventDefault();
    getShows();
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="page">
      <h1>BUSCADOR DE ALGO :D</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={handleChange}
            type="search"
            name="query  "
          />
          <button type="submit">BUSCAR</button>
        </form>
        <p>{error}</p>
      </header>
      <main className="show-list">
        <Shows shows={shows} />
      </main>
    </div>
  );
};
