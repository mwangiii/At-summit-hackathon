import React from "react";
import "./Cards.css"

function Card(props){
  return (
    <div className="card"> 
      <h3>{props.heading}</h3>
      <div className="cards">
        <span>{props.span}</span>
      </div>
    </div>
  );
}

export default Card;