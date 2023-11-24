import React, { useEffect, useState } from "react";
import { SelectTypeDog } from "./SelectTypeDog";
import { Loader } from "./Loader";

const DOG_ENDPOINT_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";
const DOG_ENPOINT_RANDOM_FACT = "https://dog-api.kinduff.com/api/facts";
const DOG_RACE_LIST = "https://dog.ceo/api/breeds/list/all";

export const FactCard = () => {
  const [fact, setFact] = useState("Lorem Ipsum cat fact whatever");
  const [dogImage, setDogImage] = useState("");
  const [typesDog, setTypesDog] = useState([]);
  const [dogSelected, setDogSelected] = useState("");

  const getDogFact = async () => {
    let res = await fetch(DOG_ENPOINT_RANDOM_FACT);
    let data = await res.json();
    setFact(data.facts[0]);
  };

  const handleOnError = async (e) => {
    setDogImage(undefined);
    fetch(DOG_ENDPOINT_IMAGE_URL)
      .then((res) => res.json())
      .then((res) => setDogImage(res.message));
  };

  useEffect(() => {
    try {
      const getDogImage = async () => {
        let url = dogSelected
          ? `https://dog.ceo/api/breed/${dogSelected}/images/random`
          : DOG_ENDPOINT_IMAGE_URL;
        let res = await fetch(url);
        let data = await res.json();
        setDogImage(data.message);
      };
      getDogImage();
    } catch (e) {
      console.error(e);
    }
  }, [dogSelected]);

  useEffect(() => {
    fetch(DOG_RACE_LIST)
      .then((res) => res.json())
      .then((res) => {
        const dogRaceList = Object.keys(res.message);

        setTypesDog(dogRaceList);
      });
  }, []);

  const handleChange = (e) => {
    setDogSelected(e.target.value);
  };

  return (
    <article className="dog-fact-article">
      <SelectTypeDog handleChange={handleChange} typesDog={typesDog} />
      <div className="dog-fact-container">
        {dogImage ? (
          <img
            className="dog-image"
            onError={handleOnError}
            style={{ width: "150px" }}
            src={dogImage}
          />
        ) : (
          <Loader />
        )}
        <div className="dog-fact-info"></div>
        <span className="dog-fact">{fact && fact}</span>
        <button onClick={() => getDogFact()}>RANDOM FACT!</button>
      </div>
    </article>
  );
};
