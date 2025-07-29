import React from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";
import { useState } from "react";

export const Memorize = () => {
  const { counter, increment } = useCounter();
  const [show, setShow] = useState(true);

  const onButtonClick = () => {
    increment();
  };

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>

      <hr />

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
