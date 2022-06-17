import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // increase
  const increase = () => {
    setCount(count + 1);
  };

  // decrease
  const decrease = () => {
    setCount(count - 1);
  };

  // reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p className="count">{count}</p>
      <div className="btns">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
