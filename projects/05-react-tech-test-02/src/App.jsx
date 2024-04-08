import "./App.css";
import { Shows } from "./components/Shows";

import { useShows } from "./hooks/useShows";
import { useSearch } from "./hooks/useSearch";
import { useEffect, useState } from "react";

export const App = () => {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { shows, getShows, loading } = useShows({ search, sort });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) return;
    getShows({ search });
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    setSort(!sort);
  };

  useEffect(() => {
    console.log("GetShows created");
  }, [getShows]);

  return (
    <div className="page">
      <h1>BUSCADOR DE ALGO :D</h1>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={handleChange}
            type="search"
            name="query"
          />
          <input type="checkbox" value={sort} onChange={handleSort} />
          <button type="submit">BUSCAR</button>
        </form>
        <p>{error}</p>
      </header>
      <main className="show-list">
        {loading ? <p>Cargadooo...</p> : <Shows shows={shows} />}
      </main>
    </div>
  );
};
