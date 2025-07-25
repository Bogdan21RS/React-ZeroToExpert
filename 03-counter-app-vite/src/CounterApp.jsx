import { useState } from "react";
import PropTypes from "prop-types";

export default function CounterApp({ value }) {
  const [counter, setCounter] = useState(value);

  function handleAdd() {
    // setCounter( (counter) => counter + 1)
    setCounter(counter + 1);
  }

  function handleSubstract() {
    setCounter(counter - 1);
  }

  function handleReset() {
    setCounter(value);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>reset</button>
    </>
  );
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
