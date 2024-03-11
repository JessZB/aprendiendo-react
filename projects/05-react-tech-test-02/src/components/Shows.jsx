import { ShowCard } from "./showCard";

export const ListOfShows = ({ shows }) => {
  return shows.map((show) => {
    return <ShowCard key={show.id} showData={show} />;
  });
};

export const NoShowsResult = () => {
  return <p>No se encontraron resultados</p>;
};

export const Shows = ({ shows }) => {
  const hasShows = shows?.length > 0;
  return (
    <ul>{hasShows ? <ListOfShows shows={shows} /> : <NoShowsResult />}</ul>
  );
};
