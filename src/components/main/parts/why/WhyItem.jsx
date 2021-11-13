import React from "react";

export default function whyItems(props) {

  return (
    <div className="why__inner-column" key={props.id}>
      <div className="why__inner-column-nft">
        <img src={props.image} alt="img" />
      </div>
      <div className="why__inner-column-content">
        <h3>{props.title}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
