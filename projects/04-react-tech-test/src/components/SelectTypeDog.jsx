import "./SelectTypeDog.css";

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
    <select
      className="dog-select-type"
      onChange={handleChange}
      name="dogType"
      id=""
    >
      {renderSelectList()}
    </select>
  );
};
