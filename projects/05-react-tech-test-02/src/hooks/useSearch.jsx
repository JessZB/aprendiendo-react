import { useEffect, useRef, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede hacer una búsqueda vacía");
      return;
    }
    if (search.length <= 2) {
      setError("Introduzca almenos 3 carácteres");
    }
    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
