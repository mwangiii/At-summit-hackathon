import React from "react";
import "./Cardsui2.css"

function Card2(props){
  return (
    <div className="card"> 
    <img src={props.img} alt="loading...."/>
      <div className="cards">
        <span>{props.span}</span>
      </div>
    </div>
  );
}

export default Card2;