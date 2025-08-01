import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const h2Ref = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = h2Ref.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={h2Ref} className="text-capitalize">
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => {
          return <img key={sprite} src={sprite} alt={name} />;
        })}
      </div>

      <div>{JSON.stringify(boxSize)}</div>
    </section>
  );
};
