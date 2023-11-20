import React, { useEffect, useState } from "react";

const DOG_ENDPOINT_IMAGE_URL = `https://dog.ceo/api/breed/}/images/random`;
const DOG_ENPOINT_RANDOM_FACT = "https://dog-api.kinduff.com/api/facts";
const DOG_RACE_LIST = "https://dog.ceo/api/breeds/list/all";

export const FactCard = () => {
  const [fact, setFact] = useState("Lorem Ipsum cat fact whatever");
  const [dogImage, setDogImage] = useState("");
  const [typesDog, setTypesDog] = useState([]);
  const [dogSelected, setDogSelected] = useState("");

  useEffect(() => {
    fetch(DOG_ENPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((res) => {
        setFact(res.facts[0]);

        fetch(DOG_ENDPOINT_IMAGE_URL)
          .then((res) => res.json())
          .then((res) => setDogImage(res.message));
      })
      .catch((e) => {
        console.log("hola");
      });
  }, []);

  useEffect(() => {
    fetch(DOG_RACE_LIST)
      .then((res) => res.json())
      .then((res) => {
        const dogRaceList = Object.keys(res.message);

        setTypesDog(dogRaceList);
      });
  }, []);

  const renderSelectList = () => {
    if (!typesDog) return;

    return typesDog.map((dog) => {
      return <option id={dog}>{dog}</option>;
    });
  };

  return (
    <article className="dog-fact-article">
      <select name="" id="">
        {renderSelectList()}
      </select>
      <div>
        <img
          style={{ width: "150px" }}
          src={
            dogImage
              ? dogImage
              : "https://dog.ceo/api/breed/Affenpinscher/images/random"
          }
        />
        <span style={{ display: "block" }}>{fact && fact}</span>
      </div>
    </article>
  );
};
