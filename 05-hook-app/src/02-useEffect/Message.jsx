import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const onMouseMove = ({ x, y }) => {
    const coords = { x, y };
    setCoords(coords);
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
