export const RandomPoint = ({ touchPoint, positionY, positionX }) => {
  return (
    <div
      onMouseOver={touchPoint}
      style={{
        zIndex: "10",
        position: "absolute",
        backgroundColor: "cyan",
        height: "20px",
        width: "20px",
        borderRadius: "50%",
        left: `${positionY}vw`,
        top: `${positionX}vh`,
      }}
    ></div>
  );
};
