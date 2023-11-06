import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [pointerPosition, setPointerPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;

      setPointerPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", (e) => {
        handleMove(e);
      });
    }
    return () => window.removeEventListener("pointermove", handleMove);
  }, [enabled]);

  return (
    <>
      <h3>Proyecto 3</h3>
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
}

export default App;
