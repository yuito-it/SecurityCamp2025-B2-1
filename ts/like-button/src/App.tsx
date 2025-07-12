import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <LikeButton />
    </>
  );
}

function LikeButton() {
  const [count, setCount] = useState(0);
  return (
    <span className="like-button" onClick={() => setCount(count + 1)}>
      ♥ {count}
    </span>
  );
}

export default App;
