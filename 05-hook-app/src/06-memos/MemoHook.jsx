import { useMemo } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";
import { useState } from "react";

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos");
  }

  return `Iterations ${iterationNumber}`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  const onButtonClick = () => {
    increment();
  };

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <hr />

      <h4>{memorizedValue}</h4>

      <button className="btn btn-primary mt-2" onClick={onButtonClick}>
        +1
      </button>

      <button
        className="btn btn-outline-primary mt-2"
        onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
