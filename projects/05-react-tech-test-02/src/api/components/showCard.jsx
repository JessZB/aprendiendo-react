export const showCard = ({ name, id, year, language }) => {
  return (
    <li key={id}>
      <h3>{name}</h3>
      <img src={image} />
      <p>{year}</p>
      <p>{language}</p>
    </li>
  );
};
