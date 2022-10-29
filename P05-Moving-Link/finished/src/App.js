import React, { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const canvasRef = useRef(null);

  // setting the height and width of canvas
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  // move the box if x or y changes
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);
    context.fillRect(x, y, 100, 100);
  }, [x, y]);

  // add event listener to window to listen for arrow keys
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    function handleKeyDown(e) {
      console.log(e.key, e);
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowRight") move("right");
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  function move(direction) {
    if (direction === "up") setY((y) => y - 20);
    if (direction === "left") setX((x) => x - 20);
    if (direction === "down") setY((y) => y + 20);
    if (direction === "right") setX((x) => x + 20);
  }

  return (
    <div className='app'>
      <canvas ref={canvasRef} />

      <div className='arrows'>
        <button onClick={() => move("up")}>Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>
    </div>
  );
}

export default App;
