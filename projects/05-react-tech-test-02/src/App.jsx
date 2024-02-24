import "./App.css";

import responseShows from "./api/with-results.json";
import noResults from "./api/no-results.json";
import { ShowCard } from "./api/components/showCard";

export const App = () => {
  const hasShows = responseShows?.length > 0;
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
        <ul>
          {hasShows ? (
            responseShows.map((el) => {
              const id = el.show.id;
              const name = el.show.name;
              const image =
                el.show.image !== null
                  ? el.show.image.medium
                  : "404notfound.png";
              const language = el.show.language;
              const year = el.show.premiered;

              return (
                <ShowCard
                  key={id}
                  showData={{ id, name, image, language, year }}
                />
              );
            })
          ) : (
            <p>No se encontraron resultados</p>
          )}
        </ul>
      </main>
    </div>
  );
};
