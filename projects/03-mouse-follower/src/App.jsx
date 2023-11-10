import "./App.css";
import "./components/PointerGame.css";
import { useState } from "react";
import { FollowMouse } from "./components/FollowMouse";
import { PointerGame } from "./components/PointerGame";

function App() {
  const [mounted, setMounted] = useState(false);
  return (
    <>
      <h3>Proyecto 3</h3>
      <FollowMouse />
      <PointerGame />
    </>
  );
}

export default App;
