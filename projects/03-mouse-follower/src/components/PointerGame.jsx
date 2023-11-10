import { useState } from "react";
import { CountDown } from "./CountDown";
import { RandomPoint } from "./RandomPoint";

const GAME_PHASE = {
  start: "GAME_START",
  stop: "GAME_STOP",
};

export const PointerGame = () => {
  const [pointCoords, setPointCoords] = useState({ x: 0, y: 0 });
  const [points, setPoints] = useState(0);

  const touchPoint = () => {
    const randomCoordX = Math.random() * 100 - 10;
    const randomCoordY = Math.random() * 100 - 10;
    setPointCoords({ x: randomCoordX, y: randomCoordY });
    setPoints(points + 1);
  };
  return (
    <div>
      <h1>PointerGame</h1>
      <RandomPoint
        touchPoint={touchPoint}
        positionX={pointCoords.x}
        positionY={pointCoords.y}
      />
      {<h1>PUNTOS {points}</h1>}
      <CountDown />
    </div>
  );
};
