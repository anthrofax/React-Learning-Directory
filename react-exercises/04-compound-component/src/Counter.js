import { useContext, createContext, useState } from "react";

const CounterContext = createContext();

function Counter({ children }) {
  const [count, setCount] = useState(0);

  const increase = function () {
    setCount((count) => count + 1);
  };

  const decrease = () => {
    setCount((count) => count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, increase, decrease }}>
      {children}
    </CounterContext.Provider>
  );
}

function Label({ children }) {
  return <span>{children}</span>;
}

function Count() {
  const { count } = useContext(CounterContext);

  return <span>{count}</span>;
}

function Increase({ icon = "+" }) {
  const { increase } = useContext(CounterContext);

  return <button onClick={increase}>{icon}</button>;
}

function Decrease({ icon = "-" }) {
  const { decrease } = useContext(CounterContext);

  return <button onClick={decrease}>{icon}</button>;
}

Counter.Label = Label;
Counter.Count = Count;
Counter.Increase = Increase;
Counter.Decrease = Decrease;

export default Counter;
