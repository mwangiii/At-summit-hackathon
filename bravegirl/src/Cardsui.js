import React from "react";
// import samburugirls from "./assets/images/samburugirls.jpg";
import "./Cards.css";
import Card from "./Cards";



function Cardsui() {
  return (
    <div className="cardsui">
      <div className="col" id="col-1">
        <Card 
        heading="APage"
        span="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
        />
      </div>
      <div className="col" id="col-2">
      <Card
      heading="BPage"
      span="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
       />
      </div>
      <div className="col" id="col-3">
      <Card 
      heading="CPage"
      span="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." 
      />
    </div>
    </div>
  );
}

export default Cardsui;