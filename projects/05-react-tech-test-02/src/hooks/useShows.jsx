import { useCallback, useMemo, useState } from "react";
import { searchShows } from "../services/shows";

export const useShows = ({ sort }) => {
  const [shows, setShows] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getShows = useCallback(async ({ search }) => {
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
  }, []);

  const sortShows = useMemo(() => {
    console.log("sorted movies");
    return sort
      ? [...shows].sort((a, b) => a.name.localeCompare(b.name))
      : shows;
  }, [sort, shows]);

  return { shows: sortShows, getShows, loading };
};
