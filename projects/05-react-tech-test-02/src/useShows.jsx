import responseShows from "./api/with-results.json";

export const useShows = () => {
  const listShows = responseShows;
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
