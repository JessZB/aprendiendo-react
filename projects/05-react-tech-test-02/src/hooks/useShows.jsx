import withResults from "../api/with-results.json";
import noResults from "../api/no-results.json";
import { useState } from "react";
import { API_TVMAZE_SEARCH_SHOWS } from "../api/api";

export const useShows = ({ search }) => {
  const [responseShows, setResponseShows] = useState([]);

  const mappedShows = responseShows?.map((el) => {
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

  const getShows = () => {
    if (search) {
      fetch(API_TVMAZE_SEARCH_SHOWS(search))
        .then((res) => res.json())
        .then((json) => setResponseShows(json));
    } else {
      setResponseShows(noResults);
    }
  };

  return { shows: mappedShows, getShows };
};
