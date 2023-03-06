import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function AccordionHeader({children, onClick}) {
  return (
    <h2 className="accordion-header">
      <button
        className="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
        onClick={onClick}
      >
        {children}
      </button>
    </h2>
  );
}
