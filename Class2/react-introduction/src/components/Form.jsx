import React, { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    e.preventDefault();
    onSubmit(input);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New item"
        value={input}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
