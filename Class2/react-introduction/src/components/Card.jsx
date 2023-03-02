import React from "react";

export default function Card({title, text, src}) {
  return (
    <div className="card">
      <img
        src={src}
        alt={text}
      />
      <div className="card-body">{title}</div>
    </div>
  );
}
