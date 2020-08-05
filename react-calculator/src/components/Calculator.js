import React, { useState } from "react";

export default function Calculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ["+", "-", "*", "/"];
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [operator, setOperator] = useState("");
  const [inputSwitch, switchInput] = useState("");
  const [output, calculateOutput] = useState("");

  //   [button, handleButton] = useState("");
  const calculate = () => {
    switch (operator) {
      case "+":
        calculateOutput(inputA + inputB);
        break;
      case "-":
        calculateOutput(inputA - inputB);

        break;
      case "*":
        calculateOutput(inputA * inputB);

        break;
      case "/":
        calculateOutput(inputA / inputB);

        break;
    }
  };
  // setting a function to handle whether we are inputing number in A or B field
  const handleNumInput = (event) => {
    if (inputSwitch === "A") {
      setInputA(event.target.value);
    } else {
      setInputB(event.target.value);
    }
  };
  // clear functionality
  const clearAll = () => {
    setInputA("");
    setInputB("");
    setOperator("");
  };
  return (
    <div>
      <button value="A" onClick={(event) => switchInput(event.target.value)}>
        A
      </button>
      <button value="B" onClick={(event) => switchInput(event.target.value)}>
        B
      </button>
      <input value={inputA}></input>
      <input value={operator}></input>
      <input value={inputB}></input>
      {/* make number buttons with jsx */}
      {numbers.map((value, index) => {
        return (
          <button
            key={index}
            value={value}
            // input (whats there) + new value
            onClick={handleNumInput}
          >
            {value}
          </button>
        );
      })}

      {operators.map((value, index) => {
        return (
          <button
            key={index}
            value={value}
            onClick={(event) => setOperator(event.target.value)}
          >
            {value}
          </button>
        );
      })}
      <button onClick={clearAll}>c</button>
      <button value="=" onClick={calculate}>
        =
      </button>
      <output>{output}</output>
    </div>
  );
}
