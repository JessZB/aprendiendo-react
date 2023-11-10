import { useEffect, useState } from "react";

export const CountDown = () => {
  const [count, setCount] = useState(5);

  const [show, setShow] = useState(true);

  useEffect(() => {
    if (count <= 0) return;
    const timer = setInterval(() => {
      setCount(count - 1);
    }, 500);

    return () => clearInterval(timer);
  }, [count]);
  return (
    <div className={`countdown-modal ${show && "visible"}`}>
      {count > 0 ? (
        count
      ) : (
        <button onClick={() => setShow(false)}>Jugar!</button>
      )}
    </div>
  );
};
