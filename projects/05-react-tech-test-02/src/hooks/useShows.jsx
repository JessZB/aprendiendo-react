import withResults from "../api/with-results.json";
import noResults from "../api/no-results.json";

export const useShows = ({ shows }) => {
  const listShows = withResults;

  const mappedShows = listShows?.map((el) => {
    const image =
      el.show.image !== null ? el.show.image.medium : "404notfound.png";
    return {
      id: el.show.id,
      name: el.show.name,
      image: image,
      language: el.show.language,
      year: el.show.premiered,
    };
  });

  return { shows: mappedShows };
};
