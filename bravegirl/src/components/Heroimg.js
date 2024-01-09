<<<<<<< HEAD:bravegirl/src/components/Heroimg.js
import React from "react";
import "../assets/css/Heroimg.css";


export default function Heroimg(props) {
  return (
    <div className="Hero">
      <div className="Hero-image">
        <img src={props.img} alt="loading...."/>
      </div>
      <div className="Hero-text">  
        <h1 id="heroHeading">{props.title}</h1>
      </div>
    </div>
  );
=======

import React from "react";
import "./Heroimg.css";


export default function Heroimg(props) {
  return (
    <div className="Hero">
      <div className="Hero-image">
        <img src={props.img} alt="loading...."/>
      </div>
      <div className="Hero-text">  
        <h1 id="heroHeading">{props.title}</h1>
      </div>
    </div>
  );
>>>>>>> origin/update02:bravegirl/src/Heroimg.js
}