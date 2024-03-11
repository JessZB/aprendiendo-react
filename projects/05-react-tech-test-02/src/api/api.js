export const API_TVMAZE_SEARCH_SHOWS = (query) =>
  `https://api.tvmaze.com/search/shows?q=${query}`;
export const API_TVMAZE_SINGLE_SHOW = (id) =>
  `https://api.tvmaze.com/shows/${id}`;
