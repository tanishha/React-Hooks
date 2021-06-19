import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 1) {
      document.title = `Count (${count})`;
    } else {
      document.title = `Count`;
    }
  });
  return (
    <div className="App">
      <div>
        <h1>{count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click⏱️
        </button>
      </div>
    </div>
  );
}

export default App;
