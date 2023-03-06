import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const setColor = (count) => {
    let color = "#333333";
    if (count > 0) {
      color = "green";
    }
    if (count < 0) {
      color = "red";
    }
    return color;
  };

  const randomHexCode = () => {
    const arrHex = Array.from({ length: 6 }, () =>
      Math.floor(Math.random() * 16).toString(16)
    );
    return "#" + arrHex.join("");
  };


  return (
    <div>
      <div className="main-container">
        <h1 className="title">Đếm số</h1>
        <h1 id="counter" style={{ color: randomHexCode() }}>
          {count}
        </h1>
        <div className="btn-container">
          <button
            className="btn counterBtn prevBtn"
            onClick={() => setCount(count - 1)}
          >
            Trừ
          </button>
          <button
            className="btn counterBtn nextBtn"
            onClick={() => setCount(count + 1)}
          >
            Cộng
          </button>
        </div>
      </div>
    </div>
  );
}
