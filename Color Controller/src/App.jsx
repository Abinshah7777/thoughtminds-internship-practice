import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="container">
      <div
        className="box"
        style={{
          backgroundColor: color || "transparent",
        }}
      ></div>

      {/* Conditional Rendering */}
      {color && <p>Current Color: {color}</p>}

      <div className="buttons">
        <button onClick={() => setColor("red")}>Red</button>

        <button onClick={() => setColor("green")}>Green</button>

        <button onClick={() => setColor("")}>Reset</button>
      </div>
    </div>
  );
}

export default App;