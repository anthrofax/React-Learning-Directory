import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  console.log(Date.now());
  console.log(new Date().getTime());
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        <button
          onClick={() => {
            setStep((s) => s - 1);
          }}
        >
          -
        </button>
        <p> Step: {step}</p>
        <button
          onClick={() => {
            setStep((s) => s + 1);
          }}
        >
          +
        </button>
      </div>

      <div className="count">
        <button
          onClick={() => {
            setCount((c) => c - step);
          }}
        >
          -
        </button>
        <p> Count: {count}</p>
        <button
          onClick={() => {
            setCount((c) => c + step);
          }}
        >
          +
        </button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago is `}
        {date.toDateString()}
      </p>
    </div>
  );
}
