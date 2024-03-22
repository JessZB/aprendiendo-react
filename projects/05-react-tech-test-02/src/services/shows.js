import { API_TVMAZE_SEARCH_SHOWS } from "../api/api";

export const searchShows = async ({ search }) => {
  try {
    if (!search) return null;
    let res = await fetch(API_TVMAZE_SEARCH_SHOWS(search));
    let json = await res.json();

    return json?.map((el) => {
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
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
