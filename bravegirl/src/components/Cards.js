import React from "react";
import "../assets/css/Cards.css"

function Card(props){
  return (
    <div className="card"> 
      <h3 id="cardoneHeading">{props.heading}</h3>
      <div className="cards">
        <span id="cardoneSpan">{props.span}</span>
      </div>
    </div>
  );
}

export default Card;