import React from "react";
import { useState } from "react";
import Box from "./Box";

export default function BoxForm() {
  const randomHex = () => {
    const arrHex = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    );
    return "#" + arrHex.join("");
  };

  const [colors, setColor] = useState(colorDf);
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const isValid = Number(value) && Number(value) > 0;
    if (isValid) {
      setInput(Number(e.target.value));
    }
  };

  const addMore = (e) => {
    e.preventDefault();
    const number = document.querySelector("input").value;
    let moreColors = Array(Number(number)).fill(null).map(randomHex);
    setColor([...colors, ...moreColors]);
  };

  const removeBox = (k) => {
    setColor(colors.filter((el, index) => index !== k));
  };

  const boxes = colors.map((color, index) => (
    <Box
      key={index}
      color={color}
      index={index}
      onClick={() => removeBox(index)}
    />
  ));

  return (
    <div className="wrap">
      <h1> JS DOM</h1>
      <input type="number" value={input} onChange={handleChange} />
      <button id="btn" onClick={addMore}>
        More boxes
      </button>
      <h4 id="score">
        Total box:<span className="points"> {colors.length}</span>
      </h4>

      <div className="boxes">{boxes}</div>
    </div>
  );
}
