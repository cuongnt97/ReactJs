import React from "react";
/**
 * @typedef CardProps
 * @param {title} title of blog card
 * @param {text} short detail of blog card
 * @param {img} thumbnail of blog card
 * @param {view} number of viewers
 * @param {update} date which blog was published
 * @returns 
 */
export default function Card({title, text, img, view, update}) {
  return (
    <div className="card">
      <div className="thumbnail">
        <img className="card-thumb" src={img} alt={title} />
        <div className="title">{title}</div>
      </div>
      <h3 className="card-title">{text}</h3>
      <div className="card-view">{view}
        {{view} < 100
          ? " ít người xem"
          : {view} > 100
          ? " khá nhiều người xem"
          : " tương đối người xem"}
      </div>
      <div className="card-update">{update}</div>
    </div>
  );
}
