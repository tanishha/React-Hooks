import React, { useState, useEffect } from "react";

function CounterComponent() {
  const [count, setCount] = useState(0);
  const [width, setwidth] = useState(window.screen.width);
  const [height, setheight] = useState(window.screen.height);

  const changedDimension = () => {
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  };
  useEffect(() => {
    if (count >= 1) {
      document.title = `Count (${count})`;
    } else {
      document.title = `Count`;
    }
  }, [count]);
  useEffect(() => {
    window.addEventListener("resize", changedDimension);
    return () => {
      window.removeEventListener("resize", changedDimension);
    };
  }, [width, height]);
  return (
    <div>
      <div>
        <h1>{count}</h1>
        <button className="btn" onClick={() => setCount(count + 1)}>
          Click⏱️
        </button>
        <p>The size of the window is</p>
        <p>
          {width}*{height}
        </p>
      </div>
    </div>
  );
}

export default CounterComponent;
