import { useEffect, useState } from "react";
import { RandomPoint } from "./RandomPoint";

export const FollowMouse = () => {
  const [pointerPosition, setPointerPosition] = useState({
    x: 0,
    y: 0,
  });

  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;

      setPointerPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }
    console.log("efecto");
    return () => {
      // cleanup
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enabled);
    return () => {
      document.body.classList.remove("no-cursor", enabled);
    };
  }, [enabled]);

  return (
    <>
      <div
        style={{
          transform: `translate(${pointerPosition.x}px, ${pointerPosition.y}px)`,
        }}
        className="cursor-shadow"
      ></div>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"}
      </button>
    </>
  );
};
