import React from "react";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <canvas />

      <div className='arrows'>
        <button>Up</button>
        <button>Left</button>
        <button>Down</button>
        <button>Right</button>
      </div>
    </div>
  );
}

export default App;
