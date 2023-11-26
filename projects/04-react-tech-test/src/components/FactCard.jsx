import React, { useEffect, useState } from "react";
import { SelectTypeDog } from "./SelectTypeDog";
import { Loader } from "./Loader";

const DOG_ENDPOINT_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";
const DOG_ENPOINT_RANDOM_FACT = "https://dog-api.kinduff.com/api/facts";
const DOG_RACE_LIST = "https://dog.ceo/api/breeds/list/all";

export const FactCard = () => {
  const [fact, setFact] = useState(
    "Presiona el botón para elegir recibir un hecho aleatorio!"
  );
  const [dogImage, setDogImage] = useState("");
  const [typesDog, setTypesDog] = useState([]);
  const [dogSelected, setDogSelected] = useState("");

  const getDogFact = async () => {
    setFact("");
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
      <div className="dog-fact-container">
        <div className="dog-picture-select">
          {dogImage ? (
            <img className="dog-image" onError={handleOnError} src={dogImage} />
          ) : (
            <Loader />
          )}
          <SelectTypeDog handleChange={handleChange} typesDog={typesDog} />
        </div>
        <div className="dog-fact-info">
          <div className="dog-fact ">
            {fact && <span className="entrada-con-animacion">{fact}</span>}
          </div>
          <div className="random-fact-btn" onClick={() => getDogFact()}>
            <img src="dogpaw.svg" className="on-touch-rotate" alt="dog paw" />
            <span>RANDOM FACT!</span>
          </div>
        </div>
      </div>
    </article>
  );
};
