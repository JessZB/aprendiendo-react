import React, { useEffect, useState } from "react";
import { SelectTypeDog } from "./SelectTypeDog";
import { Loader } from "./Loader";
import { getDogFact, getDogRaceList, getRandomImage } from "../services/facts";

function useImageUrl({ dogSelected }) {
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    let url = `https://dog.ceo/api/breed/${dogSelected}/images/random`;
    const getDogImage = async () => {
      let res = await fetch(url);
      let data = await res.json();
      setDogImage(data.message);
    };
    try {
      getDogImage();
    } catch (e) {
      console.error(e);
    }
  }, [dogSelected]);

  return { dogImage, setDogImage };
}

export const FactCard = () => {
  const [fact, setFact] = useState(
    "Presiona el botón para elegir recibir un hecho aleatorio!"
  );
  const [dogSelected, setDogSelected] = useState("");

  const [typesDog, setTypesDog] = useState([]);

  const { dogImage, setDogImage } = useImageUrl({ dogSelected });

  const handleOnError = async (e) => {
    setDogImage(undefined);

    getRandomImage().then((res) => setDogImage(res.message));
  };

  const handleClick = () => {
    setFact("");
    getDogFact().then((res) => setFact(res));
  };

  const handleChange = (e) => {
    setDogSelected(e.target.value);
  };

  useEffect(() => {
    getDogFact().then((res) => setFact(res));
    getDogRaceList().then((res) => setTypesDog(res));
    getRandomImage().then((res) => setDogImage(res.message));
  }, []);

  return (
    <article className="dog-fact-article">
      <div className="dog-fact-container">
        <div className="dog-picture-select">
          {dogImage ? (
            <img
              data-testid="dog-image"
              className="dog-image"
              onError={handleOnError}
              src={dogImage}
            />
          ) : (
            <Loader />
          )}
          <SelectTypeDog handleChange={handleChange} typesDog={typesDog} />
        </div>
        <div className="dog-fact-info">
          <div className="dog-fact ">
            {fact && (
              <span
                data-testid="fact-dog-span"
                className="entrada-con-animacion"
              >
                {fact}
              </span>
            )}
          </div>
          <div className="random-fact-btn" onClick={handleClick}>
            <img src="dogpaw.svg" className="on-touch-rotate" alt="dog paw" />
            <span data-testid="fact-random-btn">RANDOM FACT!</span>
          </div>
        </div>
      </div>
    </article>
  );
};
