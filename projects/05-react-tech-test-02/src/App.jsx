export const App = () => {
  return (
    <main>
      <h1>Buscar películas</h1>
      <input
        type="text"
        name="search"
        id=""
        placeholder="Avengers, Kingsman..."
      />
      <div className="movie-list"></div>
    </main>
  );
};
