import React from "react";
import { ShowIncrement } from "./ShowIncrement";
import { useState } from "react";
import { useCallback } from "react";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((counter) => counter + value);
  }, []);

  return (
    <>
      <h1>useCallback hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
