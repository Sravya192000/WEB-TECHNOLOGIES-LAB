import React, { useState } from "react";

function App() {
  // useState for counter
  const [count, setCount] = useState(0);

  // Increment function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>

      <h2>{count}</h2>

      <button onClick={increment} style={{ margin: "10px" }}>
        Increment
      </button>

      <button onClick={decrement} style={{ margin: "10px" }}>
        Decrement
      </button>
    </div>
  );
}

export default App;