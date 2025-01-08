import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count: " + count);
};

function App() {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}>increment</button>
        <br></br>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
};

export default App;
