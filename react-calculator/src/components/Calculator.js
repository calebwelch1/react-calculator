import React, { useState } from "react";

export default function Calculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [input, setInput] = useState("");
  //   [button, handleButton] = useState("");
  return (
    <div>
      <input value={input}></input>
      {numbers.map((value, index) => {
        return (
          <button
            key={index}
            value={value}
            onClick={(event) => setInput(event.target.value)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
}
