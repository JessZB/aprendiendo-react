import { useState } from "react";
import { searchShows } from "../services/shows";

export const useShows = ({ search }) => {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getShows = async () => {
    try {
      setLoading(true);
      setError(null);
      let newShows = await searchShows({ search });
      setShows(newShows);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { shows, getShows, loading };
};
