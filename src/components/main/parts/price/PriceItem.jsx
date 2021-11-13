import React from "react";

export default function PriceItem(props) {
  return (
    <div className="price__inner-column" key={props.id}>
      <h3>{props.title}</h3>
      <h2>{props.number}</h2>
      <h3>{props.subtitle}</h3>
      <div className="button button-secondary">
          {props.price}
          <span>{props.abs}</span>
          </div>
      <p>{props.text}</p>
      <div className="price__inner-column-footer">{props.small}</div>
    </div>
  );
}
