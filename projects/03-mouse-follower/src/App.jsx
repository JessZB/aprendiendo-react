import { useEffect, useState } from "react";

const FollowMouse = () => {
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
      window.addEventListener("pointermove", (e) => {
        handleMove(e);
      });
    }
    console.log("efecto");
    return () => {
      // cleanup
      console.log("cleanup");
      window.removeEventListener("pointermove", handleMove);
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

function App() {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      <h3>Proyecto 3</h3>
      {mounted && <FollowMouse />}
      <button onClick={() => !setMounted(!mounted)}>Toggle FollowMouse</button>
    </>
  );
}

export default App;
