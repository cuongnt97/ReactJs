import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Children } from "react";

export default function AccordionContent({children}) {
  return (
    <div
      class="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingOne"
    >
      <div class="accordion-body">
        {children}
      </div>
    </div>
  );
}
