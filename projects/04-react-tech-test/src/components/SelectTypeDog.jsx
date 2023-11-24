export const SelectTypeDog = ({ typesDog, handleChange }) => {
  const renderSelectList = () => {
    if (!typesDog) return;

    return typesDog.map((dog) => {
      return (
        <option key={dog} id={dog}>
          {dog}
        </option>
      );
    });
  };
  return (
    <select onChange={handleChange} name="dogType" id="">
      {renderSelectList()}
    </select>
  );
};
