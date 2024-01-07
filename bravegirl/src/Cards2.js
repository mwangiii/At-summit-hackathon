import React from "react";
import "./Cardsui2.css"


function Card2(props){
  return (
    <div className="cardTwo"> 
    <img id="cardImage" src={props.img} alt="loading...."/>
      <div className="cards">
        <h6 id="cardHeading">{props.heading}</h6>
        <span id="cardSpan">{props.span}</span>
      </div>
    </div>
  );
}

export default Card2;