const DOG_ENPOINT_RANDOM_FACT = "https://dog-api.kinduff.com/api/facts";

const DOG_ENDPOINT_IMAGE_URL = "https://dog.ceo/api/breeds/image/random";

const DOG_RACE_LIST = "https://dog.ceo/api/breeds/list/all";

export const getDogFact = async () => {
  let res = await fetch(DOG_ENPOINT_RANDOM_FACT);
  let data = await res.json();
  return data.facts[0];
};

export const getRandomImage = () => {
  return fetch(DOG_ENDPOINT_IMAGE_URL)
    .then((res) => res.json())
    .then((res) => res);
};

export const getDogRaceList = () => {
  return fetch(DOG_RACE_LIST)
    .then((res) => res.json())
    .then((res) => {
      const dogRaceList = Object.keys(res.message);

      return dogRaceList;
    });
};
