import React from "react";

export default function Button({ value }) {
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      {value}
    </button>
  );
}
