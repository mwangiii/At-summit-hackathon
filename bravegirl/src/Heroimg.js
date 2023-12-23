
import React from "react";
import "./Heroimg.css";
// import samburugirls from './assets/images/samburugirls.jpg';
// import redhads from './assets/images/handsondeck.jpg';
// import pic from './assets/images/pic.avif';
// import enlightened from './assets/images/enlightened.jpg';
// import strongwoman from './assets/images/strongwoman.jpg';


export default function Heroimg(props) {
  return (
    <div className="Hero">
      <div className="Hero-image">
        <img src={props.img} alt="loading...."/>
      </div>
      <div className="Hero-text">  
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}