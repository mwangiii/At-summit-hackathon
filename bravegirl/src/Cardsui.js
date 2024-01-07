import React from "react";
// import samburugirls from "./assets/images/samburugirls.jpg";
import "./Cards.css";
import Card from "./Cards";



function Cardsui() {
  
  return (
    <div className="cardsui">
      <div className="col" id="col-1">
        <Card 
        heading="mission statement"
        span="
        Our mission is to inspire resilience and empower girls facing adversity. We celebrate their triumphs, foster a supportive community, and raise awareness about the diverse challenges they overcome." 
        />
      </div>
      <div className="col" id="col-2">
      <Card
      heading="vision statement"
      span={
        `Brave Girls envisions a world where every girl, regardless of circumstance, can spread her wings, rise above challenges, and become a beacon of inspiration for others.We strive to create a better tomorrow.`}
       />
      </div>
      <div className="col" id="col-3">
      <Card 
      heading="Your support matters"
      span="We believe in the collective power of individuals to make a lasting impact. Your support can transform lives and contribute to the realization of our vision. Here's how you can get involved." 
      />
    </div>
    </div>
  );
}

export default Cardsui;