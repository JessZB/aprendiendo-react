const getDogFact = async () => {
  let res = await fetch(DOG_ENPOINT_RANDOM_FACT);
  let data = await res.json();
  setFact(data.facts[0]);
};

export { getDogFact };
