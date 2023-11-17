import { useEffect, useState } from "react";
import { CountDown } from "./CountDown";
import { RandomPoint } from "./RandomPoint";

const GAME_PHASE = {
  start: "GAME_START",
  stop: "GAME_STOP",
};

export const PointerGame = () => {
  const [pointCoords, setPointCoords] = useState({ x: 50, y: 50 });
  const [points, setPoints] = useState(0);

  const touchPoint = () => {
    setPointCoords({ x: Math.random() * 100, y: Math.random() * 100 });
    setPoints(points + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPointCoords({ x: Math.random() * 100, y: Math.random() * 100 });
    }, 3000);

    return () => clearInterval(interval);
  }, [points]);
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
