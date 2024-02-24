export const ShowCard = ({ showData }) => {
  const { id, name, image, year, language } = showData;
  return (
    <li key={id}>
      <h3>{name}</h3>
      <img src={image} />
      <p>{year}</p>
      <p>{language}</p>
    </li>
  );
};
