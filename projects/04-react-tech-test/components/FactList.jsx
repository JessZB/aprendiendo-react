import React, { useEffect } from "react";

export const FactList = () => {
  useEffect();
  useEffect(() => {
    fetch("https://catfact.ninja/fact")
      .then((res) => res.json())
      .then((res) => {});
  }, []);

  return <div>FactList</div>;
};
